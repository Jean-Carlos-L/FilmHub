import { Multimedia } from "@models/Multimedia.model";
import { getListsMultimediaService } from "@services/getListsMultimedia.service";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const useListsMultimedia = (id: number) => {
   const fetchCustom = useFetch();
   const [listsMultimedia, setListsMultimedia] = useState<Multimedia[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const getListsMultimedia = async () => {
         try {
            setLoading(true);
            const list = await getListsMultimediaService(fetchCustom)(id);
            setListsMultimedia(list);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      }

      getListsMultimedia();
   }, []);

   return { listsMultimedia, loading };
}