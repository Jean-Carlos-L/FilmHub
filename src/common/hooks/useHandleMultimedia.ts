import { likeToMultimediaService } from "@services/likeToMultimedia.service";
import { useFetch } from "./useFetch";
import { addMultimediaToListService } from "@services/addMultimediaToList.service";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

export const useHandleMultimedia = () => {
   const fetchCustom = useFetch();
   const user = useSelector((state: RootState) => state.auth.user);

   const handleLikeToMultimedia = async (id: number) => {
      const message = await likeToMultimediaService(fetchCustom)(id, user.id.toString());
      alert(`message: ${message}`);
   }

   const handleAddMultimediaToList = async (idMultimedia: number, idList: number) => {
      const message = await addMultimediaToListService(fetchCustom)(idMultimedia, idList);
      alert(`message: ${message}`);
   }

   return { handleLikeToMultimedia, handleAddMultimediaToList };
}