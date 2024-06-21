import { Multimedia } from "@models/Multimedia.model";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { getSuggestedMultimediaService } from "@services/getSuggestedMultimedia.service";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

export const useSuggestedMultimedia = () => {
   const fetchCustom = useFetch();
   const user = useSelector((state: RootState) => state.auth.user);
   const [suggestedMultimedia, setSuggestedMultimedia] = useState<Multimedia[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchSuggestedMultimedia = async () => {
         try {
            setLoading(true);
            const multimedia = await getSuggestedMultimediaService(fetchCustom)(user.id.toString());
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