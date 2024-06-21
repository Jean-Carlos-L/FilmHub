import { UserUpdateDTOes } from "@models/User.model";

export const userUpdateAdapter = (data): UserUpdateDTOes => {
   return {
      nombre: data.fullName,
      telefono: data.phone,
      correo: data.email,
      contrasena: data.password,
      edad: data.birthdate,
      idGeneros: data.genres ?? [],
   };
}