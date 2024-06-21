import { UserUpdateDTO } from "@models/User.model"
import { useFetch } from "./useFetch"
import { updateProfileUserService } from "@services/updateProfileUser.service"
import { recoveryPasswordService } from "@services/recoveryPassword.service"
import { changePasswordService } from "@services/changePassword.service"
import { useSelector } from "react-redux"
import { RootState } from "@redux/store"

export const useUserCommand = () => {
   const fetchCustom = useFetch()
   const userId = useSelector((state: RootState) => state.auth.user?.id)

   const handleUpdateUser = async (user: UserUpdateDTO) => {
      try {
         const message = await updateProfileUserService(fetchCustom)(userId.toString(), user)
         console.log(message)
         alert(message)
      } catch (error) {
         console.error(error)
      }
   }

   const handleRecoveryPassword = async (email: string) => {
      try {
         const message = await recoveryPasswordService(fetchCustom)(email)
         console.log(message)
         alert(message)
      } catch (error) {
         console.error(error)
      }
   }

   const handleChangePassword = async (password: string, token: string) => {
      try {
         const message = await changePasswordService(fetchCustom)(password, token)
         console.log(message)
         alert(message)
      } catch (error) {
         console.error(error)
      }
   }

   return {
      handleUpdateUser,
      handleRecoveryPassword,
      handleChangePassword,
   }
}