const format = require('date-fns/format')
const { sub, add } = require('date-fns')
const CURRENT = 'current';
const ADD = 'add';
const SUB = 'sub';
const FORMAT_DAY = 'dd';
const FORMAT_MONTH = 'MM';
const FORMAT_YEAR = 'yyyy';
const DEFAULT_FORMAT = `${FORMAT_DAY}.${FORMAT_MONTH}.${FORMAT_YEAR} HH:mm`;

const parseInt = (value) => value ? Number.parseInt(value) : 0;
const formatDate = (date, dateFormat = DEFAULT_FORMAT) => format(date, dateFormat);
const parseDateFormat = (dateParser) => {
  const formatParts = [];
  dateParser.day && formatParts.push(FORMAT_DAY);
  dateParser.month && formatParts.push(FORMAT_MONTH);
  dateParser.year && formatParts.push(FORMAT_YEAR);
  return formatParts.length ? formatParts.join(' ') : DEFAULT_FORMAT;
}
const parseDuration = (dateParser) => {
  return {
    years: parseInt(dateParser.year),
    months: parseInt(dateParser.month),
    days: parseInt(dateParser.day),
  };
}

const DateParser = class {
  constructor(params) {
    this.params = Array.from(params);
    this.date = new Date();
  }
  setDay(day) {
    this.day = day;
  }
  setMonth(month) {
    this.month = month;
  }
  setYear(year) {
    this.year = year;
  }
  parse() {
    if (this.params.includes(CURRENT)) {
      return formatDate(this.date, parseDateFormat(this));
    }
    if (this.params.includes(ADD)) {
      return formatDate(add(this.date, parseDuration(this)));
    }
    if (this.params.includes(SUB)) {
      return formatDate(sub(this.date, parseDuration(this)));
    }
    throw new Error('Не переданы необходимые параметры (`current`, `add` или `sub`)');
  }
}

module.exports = DateParser;
