import { useEffect, useState } from "react";
import { useFetch } from "./useFetch"
import { MultimediaList } from "@models/List.model";
import { multimediaListsService } from "@services/getMultimediaLists.service";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

export const useMultimediaLists = (id: number) => {
   const fetchCustom = useFetch();
   const user = useSelector((state: RootState) => state.auth.user);
   const [multimediaLists, setMultimediaLists] = useState<MultimediaList[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getMultimediaLists = async () => {
         try {
            setLoading(true);
            const response = await multimediaListsService(fetchCustom)(user.id.toString(), id.toString());
            setMultimediaLists(response);
         } catch (error) {
            console.error(error)
         } finally {
            setLoading(false);
         }
      };

      getMultimediaLists();
   }, [id]);

   return { multimediaLists, loading };
}