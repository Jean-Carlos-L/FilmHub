import { Comment } from "src/common/models/Comment.model";
import { commentAdapter } from "../adapters/comment.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";
import { getToken } from "@utilities/getToken.utils";

export const getCommentsByMultimediaService =
   (fetch: FetchCustom) =>
      async (multimediaId: number): Promise<Comment[]> => {
         try {
            const url = `${import.meta.env.VITE_BASE_URL
               }/cinema/comentario/listarComentariosPorMultimedia?idMultimedia=${multimediaId}`;
            const response = await fetch<Comment[]>(url, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getToken()}`,
               },
            });
            const comments = response.map(commentAdapter);
            return comments;
         } catch (error) {
            console.error(error);
            return [];
         }
      };
