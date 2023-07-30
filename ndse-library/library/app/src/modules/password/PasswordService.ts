export interface iPasswordService {
  isValid(password: string, hash: string): boolean;
  generate(password: string): string;
}
