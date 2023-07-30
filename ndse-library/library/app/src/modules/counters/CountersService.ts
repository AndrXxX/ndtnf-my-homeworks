import { inject, injectable } from "inversify";
import TYPES from "../../infrastructure/types";
import { iCountersRepository } from "./CountersRepository";

@injectable()
export class CountersService {
  @inject(TYPES.CountersRepository)
  private readonly repo: iCountersRepository

  get(bookId: string): Promise<number> {
    return this.repo.get(bookId);
  }
  incr(bookId: string): Promise<number> {
    return this.repo.incr(bookId);
  }
}
