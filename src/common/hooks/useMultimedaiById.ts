import { Multimedia } from "@models/Multimedia.model";
import { useFetch } from "./useFetch"
import { useEffect, useState } from "react";
import { getMultimediaByIdService } from "@services/getMultimediaById.service";

export const useMultimediaById = (id: string) => {
   const fetchCustom = useFetch();
   const [multimedia, setMultimedia] = useState<Multimedia | null>({
      id: 0,
      title: "",
      sypnosis: "",
      image: "",
      cast: [],
      director: "",
      genre: "",
      rating: 0,
      release_date: "",
      state: 0
   });
   const [loading, setLoading] = useState<boolean>(false);


   useEffect(() => {
      const handleGetMultimediaById = async () => {
         try {
            setLoading(true);
            const multimedia = await getMultimediaByIdService(fetchCustom)(id);
            setMultimedia(multimedia);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      }

      handleGetMultimediaById();
   }, [id]);

   return { multimedia, loading }
}