import { CommentDTOes } from "@models/Comment.model";

export const createCommentAdapter = (data): CommentDTOes => {
   return {
      comentario: data.comment,
      fechaComentario: data.date,
      multimediaId: data.multimediaId.toString(),
      usuarioId: data.userId.toString(),
   };
}
