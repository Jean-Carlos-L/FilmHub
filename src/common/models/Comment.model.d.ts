import { User } from "./User.model";

export interface Comment {
   id: number;
   user: User;
   comment: string;
   date: string;
}

export interface CommentDTO {
   comment: string;
   date: string;
}