import { injectable } from "inversify";
import { iCountersRepository } from "./CountersRepository";

@injectable()
export class CountersService {
  constructor(private readonly repo: iCountersRepository) {}

  get(bookId: string): Promise<number> {
    return this.repo.get(bookId);
  }
  incr(bookId: string): Promise<number> {
    return this.repo.incr(bookId);
  }
}
