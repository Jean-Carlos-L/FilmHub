import { MultimediaList } from "@models/List.model";
import { multimediaListsAdapter } from "src/common/adapters/multimediaLists.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const multimediaListsService =
   (fetch: FetchCustom) =>
      async (id: number): Promise<MultimediaList[]> => {
         try {
            const url = `${import.meta.env.BASE_URL}/multimedia/${id}/lists`;
            const response = await fetch<MultimediaList[]>(url);
            const multimediaLists = response.data.map(multimediaListsAdapter);
            return multimediaLists;
         } catch (error) {
            return [
               {
                  idLista: 1,
                  name: "Lista 1",
                  idMultimedia: 1,
               },
               {
                  idLista: 2,
                  name: "Lista 2",
                  idMultimedia: 2,
               },
            ];
         }
      };
