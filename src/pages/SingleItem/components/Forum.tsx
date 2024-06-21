import PrimaryButton from "src/common/components/PrimaryButton";
import { useRef } from "react";
import { useCommentsQuery } from "../hooks/useCommentsQuery";
import { useCommentsCommand } from "../hooks/useCommentsCommand";

function Forum({ id }: PropsForum) {
   const textareaRef = useRef<HTMLTextAreaElement | null>(null);
   const { comments } = useCommentsQuery({ multimediaId: id });
   const { setNewComment } = useCommentsCommand({ multimediaId: id });

   const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
         textarea.style.height = "auto";
         textarea.style.height = `${textarea.scrollHeight}px`;
      }
   };

   const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const comment = formData.get("comment") as string;
      setNewComment((prevState) => ({ ...prevState, comment }));
      event.currentTarget.reset();
   };

   return (
      <section className="w-3/4 mt-10 text-gray-50">
         <h2 className="text-3xl mb-5 font-bold">Foro</h2>
         <hr className="my-3 border-2 border-gray-300" />
         {comments?.map((comment) => (
            <article
               key={comment.id}
               className="bg-terciary-default mb-6 p-3 rounded-md flex flex-col justify-between"
            >
               <p>{comment.comment}</p>
               <small className="self-end mt-2 text-opacity-75">
                  {comment.user.name} {comment.date}
               </small>
            </article>
         ))}

         <div className="flex">
            <form
               onSubmit={handleOnsubmit}
               className="flex w-full items-center space-x-2"
            >
               <textarea
                  ref={textareaRef}
                  name="comment"
                  placeholder="Escribe tu comentario"
                  className="flex-1 p-2 bg-blue-900 text-white rounded-l-md focus:outline-none resize-none"
                  rows={1}
                  onInput={adjustTextareaHeight}
               />
               <PrimaryButton type="submit">Comentar</PrimaryButton>
            </form>
         </div>
      </section>
   );
}

interface PropsForum {
   id: number;
}

export default Forum;
