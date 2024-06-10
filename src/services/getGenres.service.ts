import { Genre } from "@models/Genre.model";
import { genreAdapter } from "src/common/adapters/genre.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getGenresService = (fetch: FetchCustom) => async () => {
   try {
      const url = `${import.meta.env.BASE_URL}/multimedia/most-viewed?`;
      const response = await fetch<Genre[]>(url);
      const genres = response.data.map(genreAdapter);
      return genres;
   } catch (error) {
      console.error(error)
      return initialState;
   }
}

const initialState = [
   { id: 1, name: "Action", state: true },
   { id: 2, name: "Adventure", state: true },
   { id: 3, name: "Animation", state: true },
   { id: 4, name: "Comedy", state: true },
   { id: 5, name: "Crime", state: true },
   { id: 6, name: "Documentary", state: true },
   { id: 7, name: "Drama", state: true },
   { id: 8, name: "Family", state: true },
   { id: 9, name: "Fantasy", state: true },
   { id: 10, name: "History", state: true },
   { id: 11, name: "Horror", state: true },
   { id: 12, name: "Music", state: true },
   { id: 13, name: "Mystery", state: true },
   { id: 14, name: "Romance", state: true },
   { id: 15, name: "Science Fiction", state: true },
   { id: 16, name: "TV Movie", state: true },
   { id: 17, name: "Thriller", state: true },
   { id: 18, name: "War", state: true },
   { id: 19, name: "Western", state: true },
];