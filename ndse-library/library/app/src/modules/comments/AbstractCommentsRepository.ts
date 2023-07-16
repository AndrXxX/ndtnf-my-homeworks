import { Comment } from "./comment";

export type CommentsFilter = {
  [propertyName: string]: string|number|unknown;
}

export abstract class AbstractCommentsRepository {
  abstract getComments(limit: number, params: CommentsFilter): Promise<Comment[]>;
  abstract create(params: Comment): Promise<Comment>;
}
