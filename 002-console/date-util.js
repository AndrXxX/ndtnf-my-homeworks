const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const DateParser = require('./Utils/DateParser');

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('current', 'Текущая дата и время в формате ISO')
  .command('add', 'Дата в будущем')
  .command('sub', 'Дата в прошлом')
  .option('day', {
    alias: 'd',
    description: 'дата в календарном месяце'
  })
  .option('month', {
    alias: 'm',
    description: 'месяц'
  })
  .option('year', {
    alias: 'y',
    description: 'год'
  })
  .argv

const dateParser = new DateParser(argv._);
dateParser.setDay(argv.d);
dateParser.setMonth(argv.m);
dateParser.setYear(argv.y);

try {
  console.log(dateParser.parse());
  return process.exit(0);
} catch (e) {
  console.log(e.message);
  return process.exit(-1);
}
