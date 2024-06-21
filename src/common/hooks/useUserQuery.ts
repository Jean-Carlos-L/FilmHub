import { useSelector } from "react-redux";
import { useFetch } from "./useFetch"
import { RootState } from "@redux/store";
import { useEffect, useState } from "react";
import { UserAll } from "@models/User.model";
import { getUserByIdService } from "@services/getUserById.service";

export const useUserQuery = () => {
   const fetchCustom = useFetch();
   const userLogged = useSelector((state: RootState) => state.auth.user);
   const [user, setUser] = useState<UserAll>({} as UserAll);
   const [loading, setLoading] = useState<boolean>(false);

   const getUserById = async (id: string) => {
      try {
         setLoading(true)
         const userReponse = await getUserByIdService(fetchCustom)(id);
         setUser(userReponse)
      } catch (error) {
         console.error(error)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      getUserById(userLogged.id.toString())
   }, [])

   return { user, loading, getUserById }
}