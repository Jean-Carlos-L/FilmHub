import { Genre } from "@models/Genre.model";

export const genreAdapter = (data): Genre => {
   return {
      id: data.id,
      name: data.name,
      state: true,
   };
}