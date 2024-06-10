import { useEffect, useState } from "react";
import { CommentDTO } from "@models/Comment.model";
import { createCommentService } from "../services/createComment.service";
import { useFetch } from "src/common/hooks/useFetch";
import { now } from "@utilities/date.utils";

export const useCommentsCommand = () => {
   const fetchCustom = useFetch();
   const [newComment, setNewComment] = useState<CommentDTO>({
      comment: "",
      date: now(),
   });
   const [result, setResult] = useState<string>("");

   const addComment = async () => {
      try {
         const message = await createCommentService(fetchCustom)(newComment);
         setResult(message);
         alert(message);
         setNewComment({ comment: "", date: new Date().toISOString() });
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