import { UserUpdateDTO, UserUpdateDTOes } from "@models/User.model";
import { getToken } from "@utilities/getToken.utils";
import { userUpdateAdapter } from "src/common/adapters/userUpdate.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const updateProfileUserService =
   (fetch: FetchCustom) =>
      async (user_id: string, user: UserUpdateDTO): Promise<string> => {
         try {
            const url = `${import.meta.env.VITE_BASE_URL}/cinema/editarUsuario/${user_id}`;
            const body = userUpdateAdapter(user)
            console.log('body', body)
            await fetch<UserUpdateDTOes>(
               url,
               {
                  method: "PUT",
                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${getToken()}`,
                  },
               },
               body
            );

            return "Usuario actualizado correctamente";
         } catch (error) {
            console.error(error);
         }
      };
