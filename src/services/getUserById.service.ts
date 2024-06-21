import { UserAll } from "@models/User.model";
import { getToken } from "@utilities/getToken.utils";
import { userAdapter } from "src/common/adapters/user.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getUserByIdService = (fetch: FetchCustom) => async (id: string): Promise<UserAll> => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/consultarUsuario/${id}`;
      const response = await fetch<UserAll>(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
         },
      });
      return userAdapter(response);
   } catch (error) {
      console.error(error)
      return {} as UserAll;
   }
}