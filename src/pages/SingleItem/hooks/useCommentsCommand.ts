import { useEffect, useState } from "react";
import { CommentDTO } from "@models/Comment.model";
import { createCommentService } from "../services/createComment.service";
import { useFetch } from "src/common/hooks/useFetch";
import { now } from "@utilities/date.utils";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

export const useCommentsCommand = ({ multimediaId }) => {
   const fetchCustom = useFetch();
   const user = useSelector((state: RootState) => state.auth.user);
   const [newComment, setNewComment] = useState<CommentDTO>({
      comment: "",
      date: now(),
      multimediaId: multimediaId,
      userId: user?.id.toString(),
   });
   const [result] = useState<string>("");

   const addComment = async () => {
      try {
         const message = await createCommentService(fetchCustom)({ ...newComment, userId: user.id.toString(), multimediaId });
         alert(message);
         setNewComment({ comment: "", date: now(), multimediaId: "" });
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      if (newComment.comment !== "") {
         console.log('guardando comment')
         addComment();
      }
   }, [newComment]);

   return { newComment, setNewComment, addComment, result }
}