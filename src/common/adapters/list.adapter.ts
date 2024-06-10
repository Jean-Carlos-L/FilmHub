import { List } from "@models/List.model";

export const listAdapter = (list): List => {
   return {
      id: list.id,
      name: list.name,
   };
}