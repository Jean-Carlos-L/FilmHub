import { UserUpdateDTO } from "@models/User.model"
import { useFetch } from "./useFetch"
import { updateProfileUserService } from "@services/updateProfileUser.service"

export const useUserCommand = () => {
   const fetchCustom = useFetch()

   const handleUpdateUser = async (user: UserUpdateDTO) => {
      try {
         const message = await updateProfileUserService(fetchCustom)(user)
         console.log(message)
         alert(message)
      } catch (error) {
         console.error(error)
      }
   }

   return {
      handleUpdateUser
   }
}