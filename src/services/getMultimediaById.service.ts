import { Multimedia } from "@models/Multimedia.model";
import { getToken } from "@utilities/getToken.utils";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getMultimediaByIdService = (fetch: FetchCustom) => async (id: string): Promise<Multimedia> => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/multimedia/${id}`;
      const response = await fetch(url,
         {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${getToken()}`
            }
         }
      );

      return multimediaAdapter(response);
   } catch (error) {
      console.error(error);
      return {} as Multimedia;
   }
}