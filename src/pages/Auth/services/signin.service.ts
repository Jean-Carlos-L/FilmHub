import { User, UserCredentials, UserCredentialses } from "@models/User.model";
import { userAuthAdapter } from "src/common/adapters/userAuth.adapter";
import { userLoginAdapter } from "src/common/adapters/userLogin.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const signinService =
   (fetch: FetchCustom) =>
      async (user: UserCredentials): Promise<User | boolean> => {
         try {
            const url = `${import.meta.env.VITE_BASE_URL}/cinema/login`;
            const response = await fetch<UserCredentialses>(
               url,
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
               },
               userLoginAdapter(user)
            );
            return userAuthAdapter(response);
         } catch (error) {
            console.error(error);
            return false;
         }
      };
