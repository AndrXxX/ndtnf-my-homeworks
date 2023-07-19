export interface iCountersRepository {
  get(bookId: string): Promise<number>;
  incr(bookId: string): Promise<number>;
}
