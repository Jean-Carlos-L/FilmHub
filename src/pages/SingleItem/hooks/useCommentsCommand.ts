import { useEffect, useState } from "react";
import { CommentDTO } from "@models/Comment.model";
import { createCommentService } from "../services/createComment.service";
import { useFetch } from "src/common/hooks/useFetch";

export const useCommentsCommand = () => {
   const fetchCustom = useFetch();
   const [newComment, setNewComment] = useState<CommentDTO>({
      comment: "",
      date: new Date().toISOString(),
   });
   const [result, setResult] = useState<string>("");

   const addComment = async () => {
      try {
         await createCommentService(fetchCustom)(newComment);
         setResult("Comment added successfully");
         setNewComment({ comment: "", date: new Date().toISOString() });
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      if (newComment.comment !== "") {
         addComment();
      }
   }, [newComment]);

   return { newComment, setNewComment, addComment, result }
}