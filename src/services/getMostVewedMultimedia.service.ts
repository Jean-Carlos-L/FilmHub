import { Multimedia } from "@models/Multimedia.model";
import { getToken } from "@utilities/getToken.utils";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getMostVewedMultimediaService =
   (fetch: FetchCustom) =>
      async (params: { limit: number }): Promise<Multimedia[]> => {
         try {
            const url = `${import.meta.env.VITE_BASE_URL}/cinema/multimedia/listarLasMejorCalificadas`;
            const response = await fetch<Multimedia[]>(url, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getToken()}`,
               },
            });
            const multimedia = response.map(multimediaAdapter);
            return multimedia;
         } catch (error) {
            console.error(error);
            return [];
         }
      };

