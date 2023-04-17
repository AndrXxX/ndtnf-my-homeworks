const EventEmitter = require('events');
const logAccessorFactory = require('./LogAccessor');
const LINES_SEPARATOR = ';\n';
const RESULT_SEPARATOR = ',';

class ResultLogger extends EventEmitter { }
const emitter = new ResultLogger();

emitter.on('start', (fileName) => {
  const logAccessor = logAccessorFactory.getLogger(fileName);

  emitter.on('logResult', (result, generatedValue) => {
    const data = [Number(result), generatedValue].join(RESULT_SEPARATOR) + LINES_SEPARATOR;
    logAccessor.emit('write', data);
  });
});

module.exports = emitter;
