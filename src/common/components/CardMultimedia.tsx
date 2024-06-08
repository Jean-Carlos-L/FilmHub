import { HeartIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

interface Props {
   title: string;
   image: string;
   alt: string;
}

function CardMultimedia({ title, image, alt }: Props) {
   return (
      <div className="max-w-md mx-auto bg-terciary-default shadow-lg rounded-lg overflow-hidden text-gray-200 transition duration-300 transform hover:scale-105">
         <div className="flex justify-between items-center px-4 py-2 bg-terciary-light">
            <button className="focus:outline-none transition duration-300 transform hover:scale-110">
               <HeartIcon className="w-8 h-8 text-gray-200 hover:text-primary-dark" />
            </button>
            <button className="focus:outline-none transition duration-300 transform hover:scale-110">
               <PlusCircleIcon className="w-8 h-8 text-gray-200 hover:text-secondary-light" />
            </button>
         </div>
         <div className="px-3 py-2">
            <img className="w-full h-auto rounded-sm" src={image} alt={alt} />
            <div className="py-4">
               <div className="text-center">
                  <h2 className="text-2xl font-semibold">{title}</h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CardMultimedia;