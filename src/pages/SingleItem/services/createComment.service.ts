import { CommentDTO } from "@models/Comment.model";
import { FetchCustom } from "src/common/hooks/useFetch";

export const createCommentService = (fetch: FetchCustom) => async (comment: CommentDTO) => {
   try {
      const url = `${import.meta.env.REACT_APP_API_URL}/comments`
      const newComment = await fetch<CommentDTO>(url, undefined, comment);
      return newComment.message;
   } catch (error) {
      console.error(error);
      return "Error al crear el comentario"
   }
}