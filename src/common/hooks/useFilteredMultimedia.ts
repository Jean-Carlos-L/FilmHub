import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Multimedia } from "@models/Multimedia.model";
import { getFilteredMultimediaService } from "@services/getFilteredMultimedia.service";
import { FilterState } from "./useReducerFilter";

export const useFilteredMultimedia = ({
   searchText,
   rating,
   genres,
   search,
}: FilterState) => {
   const fetchCustom = useFetch();
   const [filteredMultimedia, setFilteredMultimedia] = useState<
      Multimedia[]
   >([]);
   const [loading, setLoading] = useState<boolean>(true);

   const isFiltering = searchText || rating || genres.length > 0;

   useEffect(() => {
      const fetchFilteredMultimedia = async () => {
         try {
            setLoading(true);
            const multimedia = await getFilteredMultimediaService(fetchCustom)({
               searchText,
               rating,
               genres,
            });
            setFilteredMultimedia(multimedia);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      if (isFiltering) fetchFilteredMultimedia();
   }, [search]);



   return {
      filteredMultimedia,
      loading,
      isFiltering
   };
};
