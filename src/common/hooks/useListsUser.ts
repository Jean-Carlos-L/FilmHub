import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { List } from "@models/List.model";
import { getListsUserService } from "@services/getListsUser.service";

export const useListsUser = () => {
   const fetchCustom = useFetch();
   const [listsUser, setListsUser] = useState<List[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const getListsUser = async () => {
         try {
            setLoading(true);
            const list = await getListsUserService(fetchCustom)();
            setListsUser(list);
         } catch (error) {
            console.error(error);
         } finally {
            setLoading(false);
         }
      }

      getListsUser();
   }, []);

   return { listsUser, loading };
}