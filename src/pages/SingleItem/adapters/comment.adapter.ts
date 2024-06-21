import { Comment } from "src/common/models/Comment.model";

export const commentAdapter = (data): Comment => {
   return {
      id: data.comentarioId,
      user: {
         id: data.usuarioId,
         name: data.nombreUsuario,
      },
      comment: data.comentario,
      date: data.fechaComentario,
   };
}