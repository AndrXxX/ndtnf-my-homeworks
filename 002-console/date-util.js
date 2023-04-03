const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command('current', 'Текущая дата и время в формате ISO')
  .command('add', 'Дата в будущем')
  .command('sub', 'Дата в прошлом')
  .option('day', {
    alias: 'd',
    type: 'boolean',
    description: 'дата в календарном месяце'
  })
  .option('month', {
    alias: 'm',
    type: 'boolean',
    description: 'месяц'
  })
  .option('year', {
    alias: 'y',
    type: 'boolean',
    description: 'год'
  })
  .argv

console.log(argv)
