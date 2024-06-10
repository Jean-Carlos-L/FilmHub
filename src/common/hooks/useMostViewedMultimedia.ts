import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Multimedia } from "@models/Multimedia.model";
import { getMostVewedMultimediaService } from "@services/getMostVewedMultimedia.service";

export const useMostViewedMultimedia = () => {
   const fetchCustom = useFetch();
   const [mostViewedMultimedia, setMostViewedMultimedia] = useState<Multimedia[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchMostViewedMultimedia = async () => {
         try {
            setLoading(true);
            const multimedia = await getMostVewedMultimediaService(fetchCustom)({ limit: 5 });
            setMostViewedMultimedia(multimedia);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      };

      fetchMostViewedMultimedia();
   }, []);

   return { mostViewedMultimedia, loading };
}