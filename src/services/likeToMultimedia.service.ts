import { FetchCustom } from "src/common/hooks/useFetch";

export const likeToMultimediaService = (fetch: FetchCustom) => async (id: number) => {
   try {
      const url = `${import.meta.env.BASE_URL}/multimedia/most-viewed/${id}`;
      const response = await fetch(url, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      return response.message;
   } catch (error) {
      console.error(error)
      return "Error al dar like al multimedia"
   }
}