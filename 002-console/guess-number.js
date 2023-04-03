const readline = require('readline');
const NumberSuggester = require('./Utils/NumberSuggester');
const numberSuggester = new NumberSuggester();

console.log(`Загадано число от ${numberSuggester.getMinValue()} до ${numberSuggester.getMaxValue()}`);
const input = readline.createInterface(process.stdin);
input.on('line', (value) => {
  console.log(numberSuggester.getCompareResult(value));
  numberSuggester.isGuessed(value) && input.close();
});
