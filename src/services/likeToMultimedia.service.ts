import { getToken } from "@utilities/getToken.utils";
import { FetchCustom } from "src/common/hooks/useFetch";

export const likeToMultimediaService =
   (fetch: FetchCustom) => async (idMultimedia: number, idUser: string) => {
      try {
         const url = `${import.meta.env.VITE_BASE_URL
            }/cinema/usuarioMultimedia/darMeGusta?idUsuario=${idUser}&idMultimedia=${idMultimedia}`;
         await fetch(url, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${getToken()}`,
            },
         });
         return "Like dado correctamente";
      } catch (error) {
         console.error(error);
         return "Error al dar like al multimedia";
      }
   };
