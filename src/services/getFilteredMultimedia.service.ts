import { Multimedia } from "@models/Multimedia.model";
import { getToken } from "@utilities/getToken.utils";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";
import { FilterState } from "src/common/hooks/useReducerFilter";

export const getFilteredMultimediaService =
   (fetch: FetchCustom) =>
      async ({
         searchText,
         rating,
         genres,
      }: FilterState): Promise<Multimedia[]> => {
         try {
            const genresFormatted = genres.map((genre) => genre.id).join(",");
            const url = `${import.meta.env.VITE_BASE_URL
               }/cinema/multimedia/multimediasFiltros?calificacion=${rating ?? ""}&generos=${genresFormatted}&titulo=${searchText}`;
            console.log('url', url)
            const response = await fetch<Multimedia[]>(url, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getToken()}`,
               },

            });
            console.log('response filtro', response)
            const multimedia = response.map(multimediaAdapter);
            return multimedia;
         } catch (error) {
            console.error(error);
            return filterMovies({ movies: [], searchText, rating, genres })
         }
      };

function filterMovies({ movies, searchText = "", rating = null, genres = [] }) {
   const genresMap = genres.map(genre => genre.name.toLowerCase());
   let filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchText.toLowerCase());
   })

   if (rating) {
      filteredMovies = filteredMovies.filter(movie => movie.rating >= rating);
   }

   if (genres.length > 0) {
      filteredMovies = filteredMovies.filter(movie => {
         const movieGenres = movie.genre.split(", ").map(genre => genre.toLowerCase());
         return genresMap.some(genre => movieGenres.includes(genre));
      });
   }

   return filteredMovies;
}
