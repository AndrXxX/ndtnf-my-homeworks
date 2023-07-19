import { injectable } from "inversify";
import { Document, model } from "mongoose";
import { Comment } from '../modules/comments/comment';
import { iCommentsRepository, CommentsFilter } from "../modules/comments/CommentsRepository";
import { commentSchema } from "./mongo.schemas/comment.schema";

const CommentModel = model<Comment & Document>('Comment', commentSchema);

@injectable()
export class MongoCommentsRepository implements iCommentsRepository {
  async getComments(limit: number, params: CommentsFilter): Promise<Comment[]> {
    return CommentModel.find(params).sort({ 'date': -1, '_id': -1 }).limit(limit).select('-__v');
  }
  async create(params: Comment): Promise<Comment> {
    const comment = new CommentModel(params);
    await comment.save();
    return comment;
  }
}
