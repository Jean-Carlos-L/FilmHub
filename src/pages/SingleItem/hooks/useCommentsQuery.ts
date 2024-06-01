import { Comment } from "src/common/models/Comment.model";
import { useEffect, useState } from "react";
import { getCommentsByMultimediaService } from "../services/getCommentsByMultimedia";
import { useFetch } from "src/common/hooks/useFetch";

export const useCommentsQuery = ({ multimediaId }: { multimediaId: number }) => {
   const fetchCustom = useFetch();
   const [comments, setComments] = useState<Comment[]>([]);

   const getCommentsByMultimedia = async () => {
      try {
         const comments = await getCommentsByMultimediaService(fetchCustom)(multimediaId);
         setComments(comments);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      getCommentsByMultimedia();
   }, [multimediaId]);

   return { comments, getCommentsByMultimedia };
}