import axios from "axios";
import { injectable } from "inversify";
import config from "../config";
import { AbstractCountersRepository } from "../modules/counters/AbstractCountersRepository";

const PROTOCOL = 'http';
const getUrl = (serviceUrl: string, bookId: string): string => `${PROTOCOL}://${serviceUrl}/counter/${bookId}`;
const incrUrl = (serviceUrl: string, bookId: string): string => `${getUrl(serviceUrl, bookId)}/incr`;

async function getResult(url: string, method: string): Promise<number> {
  try {
    let result;
    switch (method) {
      case 'post':
        result = await axios.post(url)
        break;
      default:
        result = await axios.get(url)
        break;
    }
    return result.data as number;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

@injectable()
export class ApiCountersRepository implements AbstractCountersRepository {
  url: string;
  constructor() {
    this.url = config.counterUrl;
  }
  async get(bookId: string): Promise<number> {
    return await getResult(getUrl(this.url, bookId), 'get');
  }
  async incr(bookId: string): Promise<number> {
    return await getResult(incrUrl(this.url, bookId), 'post');
  }
}
