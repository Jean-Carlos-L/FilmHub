import { CommentDTO, CommentDTOes } from "@models/Comment.model";
import { getToken } from "@utilities/getToken.utils";
import { FetchCustom } from "src/common/hooks/useFetch";
import { createCommentAdapter } from "../adapters/createComment.adapter";

export const createCommentService =
   (fetch: FetchCustom) => async (comment: CommentDTO) => {
      try {
         console.log('comment', comment)
         const url = `${import.meta.env.VITE_BASE_URL
            }/cinema/comentario/agregarComentario`;
         await fetch<CommentDTOes>(
            url,
            { method: "POST", headers: { Authorization: `Bearer ${getToken()}` } },
            createCommentAdapter(comment)
         );
         return "Comentario creado con éxito";
      } catch (error) {
         console.error(error);
         return "Error al crear el comentario";
      }
   };
