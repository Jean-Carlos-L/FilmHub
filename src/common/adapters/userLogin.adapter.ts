import { UserCredentialses } from "@models/User.model";

export const userLoginAdapter = (data): UserCredentialses => {
   return {
      correo: data.email,
      contrasena: data.password,
   };
}