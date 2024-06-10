import { Genre } from "@models/Genre.model";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { getGenresService } from "@services/getGenres.service";

export const useGenres = () => {
   const fetchCustom = useFetch();
   const [genres, setGenres] = useState<Genre[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchGenres = async () => {
         try {
            setLoading(true);
            const genre = await getGenresService(fetchCustom)();
            setGenres(genre);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchGenres();
   }, []);

   return {
      genres,
      loading,
   };
};
