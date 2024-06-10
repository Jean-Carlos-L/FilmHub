import { authUser } from "@utilities/authUser.utils";
import { FetchCustom } from "src/common/hooks/useFetch";

export const likeToMultimediaService = (fetch: FetchCustom) => async (idMultimedia: number) => {
   try {
      const idUser = authUser().id;
      const url = `${import.meta.env.BASE_URL}/cinema/usuarioMultimedia/darMeGusta?idUsuario=${idUser}&idMultimedia=${idMultimedia}`;
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