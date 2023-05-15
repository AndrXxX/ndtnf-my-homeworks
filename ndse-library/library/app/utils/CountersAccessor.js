const axios = require('axios');
const { counterUrl } = require("../config");
const getUrl = (bookId) => `${counterUrl}/counter/${bookId}`;
const incrUrl = (bookId) => `${getUrl(bookId)}/incr`;

async function getResult(url, method) {
  try {
    const result = await axios[method](url)
    return result.data;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

class CountersAccessor {
  async get(bookId) {
    return await getResult(getUrl(bookId), 'get');
  }
  async incr(bookId) {
    return await getResult(incrUrl(bookId), 'post');
  }
}

module.exports = {
  getAccessor: () => new CountersAccessor(),
};
