import { useState } from "react";
import { useHandleMultimedia } from "../hooks/useHandleMultimedia";
import { HeartIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import ModalLists from "./ModalLists";
import { List } from "@models/List.model";
import { useMultimediaLists } from "../hooks/useMultimediaLists";
import { useListsUser } from "../hooks/useListsUser";

interface Props {
   id: number;
   title: string;
   image: string;
   alt: string;
   navigateTo: () => void;
}

function CardMultimedia({ id, title, image, alt, navigateTo }: Props) {
   const { multimediaLists } = useMultimediaLists(id);
   const { listsUser } = useListsUser();
   const { handleAddMultimediaToList } =
      useHandleMultimedia();
   const [showModal, setShowModal] = useState(false);

   const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const listId = listsUser?.find(list => list.name.toLocaleLowerCase() === "me gusta")?.id;
      handleAddMultimediaToList(id, listId!);
   };

   const handleAddClick = (list: List) => {
      handleAddMultimediaToList(id, list.id);
   };

   const toggleModal = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setShowModal(!showModal)
   };

   return (
      <article
         style={{ maxWidth: 270, minWidth: 270 }}

         className="max-w-sm min-w-sm mx-auto bg-terciary-default shadow-lg rounded-lg overflow-hidden text-gray-200 transition duration-300 transform hover:scale-105"
      >
         <div className="flex justify-between items-center px-4 py-2 bg-terciary-light">
            <button
               onClick={handleLikeClick}
               className="focus:outline-none transition duration-300 transform hover:scale-110"
            >
               <HeartIcon className="w-8 h-8 text-gray-200 hover:text-primary-dark" />
            </button>
            <button
               onClick={toggleModal}
               className="focus:outline-none transition duration-300 transform hover:scale-110"
            >
               <PlusCircleIcon className="w-8 h-8 text-gray-200 hover:text-secondary-light" />
            </button>
         </div>
         <div className="px-3 py-2" onClick={navigateTo}>
            <img className="w-full h-auto rounded-sm" style={{ maxHeight: 350, minHeight: 350 }} src={image} alt={alt} />
            <div className="py-4">
               <div className="text-center">
                  <h2 className="text-sm font-semibold">{title}</h2>
               </div>
            </div>
         </div>

         <ModalLists
            show={showModal}
            handleClose={() => setShowModal(!showModal)}
            multimediaLists={multimediaLists}
            setSelectedList={handleAddClick}
         />
      </article>
   );
}

export default CardMultimedia;
