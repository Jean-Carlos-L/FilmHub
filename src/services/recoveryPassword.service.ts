import { FetchCustom } from "src/common/hooks/useFetch";

export const recoveryPasswordService = (fetch: FetchCustom) => async (email: string) => {
   try {
      const url = `${import.meta.env.BASE_URL}/auth/recovery`
      const response = await fetch(url, {
         method: "POST",
         body: JSON.stringify({ email }),
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