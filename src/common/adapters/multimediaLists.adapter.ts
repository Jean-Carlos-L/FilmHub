import { MultimediaList } from "@models/List.model";

export const multimediaListsAdapter = (data): MultimediaList => {
   return {
      idLista: data.idLista,
      name: data.name,
      idMultimedia: data.idMultimedia
   }
}