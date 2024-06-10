import { likeToMultimediaService } from "@services/likeToMultimedia.service";
import { useFetch } from "./useFetch";
import { addMultimediaToListService } from "@services/addMultimediaToList.service";

export const useHandleMultimedia = () => {
   const fetchCustom = useFetch();

   const handleLikeToMultimedia = async (id: number) => {
      const message = await likeToMultimediaService(fetchCustom)(id);
      alert(`message: ${message}`);
   }

   const handleAddMultimediaToList = async (idMultimedia: number, idList: number) => {
      const message = await addMultimediaToListService(fetchCustom)(idMultimedia, idList);
      alert(`message: ${message}`);
   }

   return { handleLikeToMultimedia, handleAddMultimediaToList };
}