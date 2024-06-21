import { UserDTOes } from "@models/User.model"

export const userCreateAdapter = (data): UserDTOes => {
   return {
      nombre: data.firstName + ' ' + data.lastName,
      telefono: data.phone,
      correo: data.email,
      edad: data.birthdate,
      contrasena: data.password,
   }
}