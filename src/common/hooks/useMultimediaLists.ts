import { useEffect, useState } from "react";
import { useFetch } from "./useFetch"
import { MultimediaList } from "@models/List.model";
import { multimediaListsService } from "@services/getMultimediaLists.service";

export const useMultimediaLists = (id: number) => {
   const fetchCustom = useFetch();
   const [multimediaLists, setMultimediaLists] = useState<MultimediaList[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getMultimediaLists = async () => {
         try {
            setLoading(true);
            const response = await multimediaListsService(fetchCustom)(id);
            setMultimediaLists(response);
         } catch (error) {
            console.error(error)
         } finally {
            setLoading(false);
         }
      };

      getMultimediaLists();
   }, [id]);

   return { multimediaLists, loading };
}