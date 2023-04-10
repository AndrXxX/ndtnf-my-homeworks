const EventEmitter = require('events');
const http = require('http');
const { apiKey, apiHost } = require('../config');
const methods = {
  current: 'current',
};

const getResponse = (url, callback) => {
  http.get(url, (response) => {
    let rawData = ''
    response.on('data', (chunk) => rawData += chunk)
    response.on('end', () => {
      let parsedData = JSON.parse(rawData)
      if (parsedData.success === false) {
        const error = parsedData.error.info ? parsedData.error.info : 'Произошла неизвестная ошибка';
        console.log(`Ошибка при выполнении запроса: ${error}`);
        return process.exit(-1);
      }
      callback(parsedData);
    });
  }).on('error', (e) => {
    console.log(e.message);
    return process.exit(-1);
  });
}

const buildUrl = (method, query) => {
  return `${apiHost}${method}?access_key=${apiKey}&query=${query}`;
}

const onRequestCurrent = (accessor, city) => {
  getResponse(buildUrl(methods.current, city), (parsedData) => {
    if (!parsedData.location || !parsedData.location.name || !parsedData.current || !parsedData.current.temperature) {
      console.log('Некорректный ответ сервера');
      return process.exit(-1);
    }
    accessor.emit('requestCurrentEnd', {
      city: parsedData.location.name,
      temperature: parsedData.current.temperature,
    })
  })
}

class WeatherAccessor extends EventEmitter {
  requestCurrent(city) {
    this.emit('requestCurrent', city);
  }
}
const getAccessor = () => {
  const accessor = new WeatherAccessor();
  accessor.on('requestCurrent', (city) => onRequestCurrent(accessor, city));
  return accessor;
}

module.exports = {
  create: () => getAccessor(),
};
