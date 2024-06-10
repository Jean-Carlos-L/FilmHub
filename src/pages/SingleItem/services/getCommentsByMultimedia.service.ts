import { Comment } from "src/common/models/Comment.model";
import { commentAdapter } from "../adapters/comment.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getCommentsByMultimediaService = (fetch: FetchCustom) => async (multimediaId: number): Promise<Comment[]> => {
   try {
      const url = `${import.meta.env.BASE_URL}/comments/${multimediaId}`;
      const response = await fetch<Comment[]>(url);
      const comments = response.data.map(commentAdapter);
      return comments;
   } catch (error) {
      console.error(error);
      return [
         {
            id: 1,
            comment: "Excelente película",
            date: "2021-10-01",
            user: {
               id: 1,
               name: "Juan Antonio García",
               image: ""
            }
         },
         {
            id: 2,
            comment: "Muy buena",
            date: "2021-10-02",
            user: {
               id: 2,
               name: "Ana López",
               image: ""
            }
         }
      ]
   }
}