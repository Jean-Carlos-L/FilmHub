import { getToken } from "@utilities/getToken.utils";
import { FetchCustom } from "src/common/hooks/useFetch";

export const addMultimediaToListService =
   (fetch: FetchCustom) => async (idMultimedia, idList) => {
      try {
         const url = `${import.meta.env.VITE_BASE_URL
            }/cinema/listaMultimedia/agregarMultimediaALista`;
         const body = {
            multimediaId: idMultimedia,
            listaId: idList,
         }
         console.log('body', body)
         const response = await fetch(
            url,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getToken()}`,
               },
            },
            body
         );

         console.log('response', response)
         return "Multimedia agregada a la lista exitosamente";
      } catch (error) {
         return "Error al agregar multimedia a la lista";
      }
   };
