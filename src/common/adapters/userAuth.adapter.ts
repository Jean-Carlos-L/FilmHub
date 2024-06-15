import { User } from "@models/User.model";

export const userAuthAdapter = (data): User => {
   return {
      id: data.id,
      name: data.name,
      email: data.email,
      token: data.token
   }
}