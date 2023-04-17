const EventEmitter = require('events');
const logAccessorFactory = require('./LogAccessor');
const LINES_SEPARATOR = ';\n';
const RESULT_SEPARATOR = ',';

class StatCounter extends EventEmitter {
  unprocessed = '';
  result = [];
}
const counter = new StatCounter();

counter.on('line', (line) => {
  if (!line) {
    return;
  }
  const [gameResult, _generatedValue] = String(line).split(RESULT_SEPARATOR);
  counter.result.push(Boolean(Number.parseInt(gameResult)));
});

counter.on('data', (chunk) => {
  counter.unprocessed += String(chunk);
  while (counter.unprocessed.includes(LINES_SEPARATOR)) {
    const lines = String(counter.unprocessed).split(';\n');
    const line = lines.shift();
    line && counter.emit('line', line);
    counter.unprocessed = lines.join(LINES_SEPARATOR);
  }
});

counter.on('computeResult', () => {
  const gameStat = {
    total: counter.result.length,
    win: 0,
    lose: 0,
    winPercent: 0,
  }
  counter.result.forEach(gameResult => gameResult ? gameStat.win++ : gameStat.lose++);
  gameStat.total && (gameStat.winPercent = Math.round(gameStat.win * 100 / gameStat.total));
  counter.emit('end', gameStat);
});

counter.on('start', (fileName) => {
  const logReader = logAccessorFactory.getReader(fileName);
  logReader.on('data', (chunk) => counter.emit('data', chunk));
  logReader.on('end', () => counter.emit('computeResult'));
  logReader.emit('read');
});

module.exports = counter;
