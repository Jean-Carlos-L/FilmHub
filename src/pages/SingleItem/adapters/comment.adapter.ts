import { Comment } from "src/common/models/Comment.model";

export const commentAdapter = (data): Comment => {
   return {
      id: data.id,
      user: data.user,
      comment: data.comment,
      date: data.date,
   };
}