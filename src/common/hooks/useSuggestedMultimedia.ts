import { Multimedia } from "@models/Multimedia.model";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { getSuggestedMultimediaService } from "@services/getSuggestedMultimedia.service";

export const useSuggestedMultimedia = () => {
   const fetchCustom = useFetch();
   const [suggestedMultimedia, setSuggestedMultimedia] = useState<Multimedia[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchSuggestedMultimedia = async () => {
         try {
            setLoading(true);
            const multimedia = await getSuggestedMultimediaService(fetchCustom)({ limit: 5 });
            setSuggestedMultimedia(multimedia);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchSuggestedMultimedia();
   }, []);

   return { suggestedMultimedia, loading };
}