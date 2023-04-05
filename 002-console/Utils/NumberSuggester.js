const MIN_VALUE = 0;
const MAX_VALUE = 100;
const getNumber = (value) => Number.parseInt(value);
const isNumber = (value) => value >= 0;

const NumberSuggester = class {
  constructor() {
    this.number = Math.ceil(MAX_VALUE * (Math.random() - MIN_VALUE));
  }
  getCompareResult(value) {
    value = getNumber(value);
    if (!isNumber(value)) {
      return 'Введите число';
    }
    if (value > this.number) {
      return 'Меньше';
    }
    if (value < this.number) {
      return 'Больше';
    }
    return `Отгадано число ${this.number}`;
  }
  getMinValue() {
    return MIN_VALUE;
  }
  getMaxValue() {
    return MAX_VALUE;
  }
  isGuessed(value) {
    return getNumber(value) === this.number;
  }
}

module.exports = NumberSuggester;
