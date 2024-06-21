import { FetchCustom } from "src/common/hooks/useFetch";

export const changePasswordService = (fetch: FetchCustom) => async (password: string, token: string) => {
   try {
      const url = `${import.meta.env.BASE_URL}/auth/change-password`
      const response = await fetch(url, {
         method: "POST",
         body: JSON.stringify({ password, token }),
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