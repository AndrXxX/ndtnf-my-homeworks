export abstract class iCountersRepository {
  abstract get(bookId: string): Promise<number>;
  abstract incr(bookId: string): Promise<number>;
}
