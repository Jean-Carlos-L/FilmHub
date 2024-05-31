import PrimaryButton from "@components/PrimaryButton";
import { useRef } from "react";

function Forum({ id }: PropsForum) {
   const textareaRef = useRef(null);
   console.log("id", id);

   const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto'; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
   };

   const comments = [
      {
         id: 1,
         user: {
            id: 1,
            name: "Juan Perez",
            image: "https://via.placeholder.com/50x50",
         },
         comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
         date: "2021-08-01",
      },
      {
         id: 2,
         user: {
            id: 1,
            name: "Juan Perez",
            image: "https://via.placeholder.com/50x50",
         },
         comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
         date: "2021-08-01",
      },
      {
         id: 3,
         user: {
            id: 1,
            name: "Juan Perez",
            image: "https://via.placeholder.com/50x50",
         },
         comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusda.m.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam",
         date: "2021-08-01",
      },
   ];

   return (
      <section className="w-3/4 mt-10 text-gray-50">
         <h2 className="text-3xl mb-5 font-bold">Foro</h2>
         <hr className="my-3 border-2 border-gray-300" />
         {comments.map((comment) => (
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

         <div className="flex items-center space-x-2">
            <textarea
               ref={textareaRef}
               placeholder="Escribe tu comentario"
               className="flex-1 p-2 bg-blue-900 text-white rounded-l-md focus:outline-none resize-none"
               rows={1}
               onInput={adjustTextareaHeight}
            />
            <PrimaryButton className="">Comentar</PrimaryButton>
         </div>
      </section>
   );
}

interface PropsForum {
   id: number;
}

export default Forum;
