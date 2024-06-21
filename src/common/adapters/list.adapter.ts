import { List } from "@models/List.model";
import { multimediaAdapter } from "./multimedia.adapter";

export const listAdapter = (list): List => {
   return {
      id: list.id,
      name: list.nombre,
      multimedia: list.multimedia.map(multimediaAdapter),
   };
}