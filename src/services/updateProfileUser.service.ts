import { User, UserUpdateDTO } from "@models/User.model";
import { FetchCustom } from "src/common/hooks/useFetch";

export const updateProfileUserService = (fetch: FetchCustom) => async (user: UserUpdateDTO): Promise<string> => {
   try {
      const url = `${import.meta.env.BASE_URL}/users/update`;
      const response = await fetch<User>(url, {
         method: 'PUT',
         body: JSON.stringify(user)
      });
      return response.message;
   } catch (error) {
      console.error(error)
   }
}