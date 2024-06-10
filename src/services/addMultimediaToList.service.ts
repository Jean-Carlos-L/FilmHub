import { FetchCustom } from "src/common/hooks/useFetch";

export const addMultimediaToListService = (fetch: FetchCustom) => async (idMultimedia, idList) => {
   try {
      const url = `${import.meta.env.BASE_URL}/list/${idList}/multimedia/${idMultimedia}`;
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      return response.message;
   } catch (error) {
      return "Error al agregar multimedia a la lista"
   }
}
