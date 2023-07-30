import { inject, injectable } from "inversify";
import TYPES from "../../infrastructure/types";
import { Comment } from "./comment";
import { CommentsFilter, iCommentsRepository } from "./CommentsRepository";

@injectable()
export class CommentsService {
  @inject(TYPES.CommentsRepository)
  private readonly repo: iCommentsRepository

  getComments(limit: number, params: CommentsFilter): Promise<Comment[]> {
    return this.repo.getComments(limit, params);
  }
  create(params: Comment): Promise<Comment> {
    return this.repo.create(params);
  }
}
