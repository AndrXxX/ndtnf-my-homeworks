import { Comment } from "./comment";

export type CommentsFilter = {
  [propertyName: string]: string|number|unknown;
}

export interface iCommentsRepository {
  getComments(limit: number, params: CommentsFilter): Promise<Comment[]>;
  create(params: Comment): Promise<Comment>;
}
