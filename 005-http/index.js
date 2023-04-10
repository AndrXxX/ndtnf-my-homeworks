const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { city } = require('./config');

const argv = yargs(hideBin(process.argv))
  .option('city', {
    alias: 'c',
    default: city,
    description: 'город'
  })
  .usage('Usage: node $0 -c="place" [--city="place"] [--help]')
  .example('node $0 -c="Moscow"')
  .argv;

const weatherAccessorsFactory = require('./Modules/WeaherAccessor');
const weatherAccessor = weatherAccessorsFactory.create();

weatherAccessor.on('requestCurrentEnd', result => {
  console.log(`Текущая температура в городе ${result.city}: ${result.temperature}°C`);
});

weatherAccessor.requestCurrent(argv.city);
