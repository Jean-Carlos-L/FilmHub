import { User, UserCredentials } from "@models/User.model";
import { userAuthAdapter } from "src/common/adapters/userAuth.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const signinService = (fetch: FetchCustom) => async (user: UserCredentials): Promise<User | boolean> => {
   try {
      console.log('user', user)
      const url = `${import.meta.env.BASE_URL}/auth/signin`;
      const response = await fetch<User>(url, {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      return userAuthAdapter(response.data);
   } catch (error) {
      console.error(error);
      return false;
   }
}