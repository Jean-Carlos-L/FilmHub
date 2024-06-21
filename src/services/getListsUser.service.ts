import { List } from "@models/List.model";
import { getToken } from "@utilities/getToken.utils";
import { listAdapter } from "src/common/adapters/list.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getListsUserService = (fetch: FetchCustom) => async (id: string) => {
   try {
      const url = `${import.meta.env.VITE_BASE_URL}/cinema/lista/consultarListasUsuario/${id}`;
      const response = await fetch<List[]>(url,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${getToken()}`
            }
         }
      );

      const lists = response.map(listAdapter);
      return lists;
   } catch (error) {
      console.error(error);
      return [];
   }
};
