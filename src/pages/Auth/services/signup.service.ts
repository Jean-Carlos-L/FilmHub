import { User, UserDTO } from "@models/User.model";
import { FetchCustom } from "src/common/hooks/useFetch";

export const signupService = (fetch: FetchCustom) => async (user: UserDTO): Promise<string | boolean> => {
   try {
      console.log('user', user)
      const url = `${import.meta.env.BASE_URL}/auth/signup`;
      const response = await fetch<User>(url, {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      return response.message;
   } catch (error) {
      return false;
   }
}