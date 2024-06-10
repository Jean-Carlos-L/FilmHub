import { UserAuth } from "@models/userAuth.model"

export const authUser = (): UserAuth => {
   const user = JSON.parse(localStorage.getItem("user"));
   if (user) return user

   return {
      id: "123456",
      name: "John Doe",
      email: "john@correo.com",
      token: "1234567890"
   }
}