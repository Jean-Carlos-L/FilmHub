import { FetchCustom } from "src/common/hooks/useFetch";

export const recoveryPasswordService = (fetch: FetchCustom) => async (email: string) => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/buscarCorreo/${email}`
      const response = await fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });
      return response;
   } catch (error) {
      console.error(error);
      return error;
   }
}