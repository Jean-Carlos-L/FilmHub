import { List } from "@models/List.model";
import { listAdapter } from "src/common/adapters/list.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getListsUserService = (fetch: FetchCustom) => async () => {
   try {
      // const url = `${import.meta.env.BASE_URL}/list/user`;
      // const response = await fetch<List[]>(url);
      // const lists = response.data.map(listAdapter);
      const lists = JSON.parse(localStorage.getItem('lists'));
      return lists;
   } catch (error) {
      console.error(error);
      return [
         { id: 1, name: "Lista 1", },
         { id: 2, name: "Lista 2", },
         { id: 3, name: "Lista 3", },
         { id: 4, name: "Lista 4", },
      ];
   }
};
