import { Comment } from "src/common/models/Comment.model";
import { commentAdapter } from "../adapters/comment.adapter";

export const getCommentsByMultimediaService = (fetch) => async (multimediaId: number): Promise<Comment[]> => {
   try {
      /* const url = `${import.meta.env.BASE_URL}/comments/${multimediaId}`;
      const response = await fetch(url);
      let comments = response.data.map(commentAdapter); */
      const comments = [
         {
            id: 1,
            user: {
               id: 1,
               name: "Juan Perez",
               image: "https://via.placeholder.com/50x50",
            },
            comment:
               `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.${multimediaId}`,
            date: "2021-08-01",
         },
         {
            id: 2,
            user: {
               id: 1,
               name: "Juan Perez",
               image: "https://via.placeholder.com/50x50",
            },
            comment:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
            date: "2021-08-01",
         },
         {
            id: 3,
            user: {
               id: 1,
               name: "Juan Perez",
               image: "https://via.placeholder.com/50x50",
            },
            comment:
               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusda.m.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam",
            date: "2021-08-01",
         },
      ];
      return comments;
   } catch (error) {
      console.error(error);
   }
}