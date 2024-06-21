import { Genre } from "@models/Genre.model";
import { getToken } from "@utilities/getToken.utils";
import { genreAdapter } from "src/common/adapters/genre.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getGenresService = (fetch: FetchCustom) => async () => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/genero/todos`;
      const response = await fetch<Genre[]>(url,
         {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${getToken()}`,
            },
         }
      );
      const genres = response.map(genreAdapter);
      return genres;
   } catch (error) {
      console.error(error)
      return [];
   }
}
