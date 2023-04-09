const EventEmitter = require('events');
class GameProcessEmitter extends EventEmitter { }
const resultLogger = require('./ResultLogger');
const emitter = new GameProcessEmitter();
const MAP = {
  "0": "Выйти из приложения",
  "1": "Орел",
  "2": "Решка",
}

const generateValue = () => String(Math.round(Math.random()) + 1);
const generateVariantsHint = () => {
  const parts = [];
  for (let prop in MAP) {
    parts.push(`${prop} - ${MAP[prop]}`)
  }
  return parts.join(", ") + ".";
};
const printVariants = () => console.log(`Доступные варианты: ${generateVariantsHint()}`);
let generatedValue = generateValue();

emitter.on('win', () => {
  console.log("Поздравляем! Вы угадали");
  console.log("Угадайте что ещё загадал компьютер");
  printVariants();
});

emitter.on('lose', () => {
  console.log("Вы не угадали =(");
  console.log("Угадайте что ещё загадал компьютер");
  printVariants();
});

emitter.on('start', (fileName) => {
  resultLogger.emit('start', fileName)
  console.log("Игра Орел или решка");
  console.log("Угадайте что загадал компьютер");
  printVariants();
});

emitter.on('wrongInput', () => {
  console.log("Введен неверный вариант");
  printVariants();
});

emitter.on('exit', (input) => {
  console.log("Удачи!");
  process.exit(0);
  input.close();
});

emitter.on('input', (value, path, input) => {
  if (!MAP[value]) {
    return emitter.emit('wrongInput');
  }
  if (value === "0") {
    return emitter.emit('exit', input);
  }
  const result = generatedValue === value;
  result ? emitter.emit('win') : emitter.emit('lose');
  resultLogger.emit('logResult', result, generatedValue)
  generatedValue = generateValue();
})

module.exports = emitter;
