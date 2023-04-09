const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .option('fileName', {
    alias: 'f',
    required: true,
    description: 'путь к файлу лога'
  })
  .usage('Usage: node $0 -f="path/to/file" [--fileName="path/to/file"] [--help]')
  .example('node $0 --fileName="head-tails.log"')
  .argv;

const fileName = String(argv.f);
const statCounter = require('./Utils/StatCounter');

statCounter.on('end', (gameStat) => {
  console.log('Результаты.');
  console.log(`Общее количество партий: ${gameStat.total}.`);
  console.log(`Выиграно: ${gameStat.win}, проиграно: ${gameStat.lose}.`);
  console.log(`Процентное соотношение выигранных партий: ${gameStat.winPercent}%.`);
})
statCounter.emit('start', fileName);
