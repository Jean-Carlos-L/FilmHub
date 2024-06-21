import { UserAll } from "@models/User.model"

export const userAdapter = (data): UserAll => {
   return {
      id: data.id,
      email: data.correo,
      name: data.nombre,
      phone: data.telefono,
      birthdate: data.edad,
      genres: data.generos.map(genre => genre.generoId) ?? [6, 7],
   };
}