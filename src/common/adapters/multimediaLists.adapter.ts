import { MultimediaList } from "@models/List.model";

export const multimediaListsAdapter = (data): MultimediaList => {
   return {
      idLista: data.listaId,
      name: data.nombre,
      idMultimedia: data.multimediaId
   }
}