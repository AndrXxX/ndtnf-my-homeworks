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
const gameProcessEmitter = require('./Utils/GameProcessEmitter');
const readline = require('readline');
const input = readline.createInterface(process.stdin);
input.on('line', (value) => {
  gameProcessEmitter.emit('input', value, input);
});

gameProcessEmitter.emit('start', fileName);
