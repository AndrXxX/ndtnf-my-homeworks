import { injectable } from "inversify";
import { AbstractCommentsRepository, CommentsFilter } from "./AbstractCommentsRepository";
import { Comment } from "./comment";

@injectable()
export class CommentsService {
  constructor(private readonly repo: AbstractCommentsRepository) {}

  getComments(limit: number, params: CommentsFilter): Promise<Comment[]> {
    return this.repo.getComments(limit, params);
  }
  create(params: Comment): Promise<Comment> {
    return this.repo.create(params);
  }
}
