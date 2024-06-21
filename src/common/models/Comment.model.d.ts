import { User } from "./User.model";

export interface Comment {
   id: number;
   user: UserComment;
   comment: string;
   date: string;
}

export interface CommentDTO {
   comment: string;
   date: string;
   multimediaId: string;
   userId?: string;
}

export interface CommentDTOes {
   comentario: string;
   fechaComentario: string;
   multimediaId: string;
   usuarioId: string;
}

interface UserComment {
   id: number;
   name: string;
}