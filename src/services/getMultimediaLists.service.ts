import { MultimediaList } from "@models/List.model";
import { getToken } from "@utilities/getToken.utils";
import { multimediaListsAdapter } from "src/common/adapters/multimediaLists.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const multimediaListsService =
   (fetch: FetchCustom) =>
      async (user_id: string, multimedia_id: string): Promise<MultimediaList[]> => {
         try {
            const url = `${import.meta.env.VITE_BASE_URL}/cinema/lista/consultarListasMultimedia?usuarioId=${user_id}&multimediaId=${multimedia_id}`;
            const response = await fetch<MultimediaList[]>(url, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getToken()}`,
               },

            });
            const multimediaLists = response.map(multimediaListsAdapter);
            return multimediaLists;
         } catch (error) {
            return [];
         }
      };
