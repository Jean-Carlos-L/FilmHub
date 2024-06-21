import { User } from "@models/User.model";
import { jwtDecode, JwtPayload } from 'jwt-decode'

export const userAuthAdapter = (data): User => {
   const tokenData: JwtPayload = jwtDecode(data.token)
   return {
      id: tokenData.userId,
      token: data.token,
      email: tokenData.sub
   }
}