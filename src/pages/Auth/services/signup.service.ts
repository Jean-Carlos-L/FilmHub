import { UserDTO, UserDTOes } from "@models/User.model";
import { userCreateAdapter } from "src/common/adapters/userCreate.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const signupService = (fetch: FetchCustom) => async (user: UserDTO): Promise<string | boolean> => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/registrarUsuario`;
      const response = await fetch<UserDTOes>(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         }
      }, userCreateAdapter(user));
      return response.message;
   } catch (error) {
      return false;
   }
}