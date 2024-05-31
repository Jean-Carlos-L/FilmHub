import PrimaryButton from "@components/PrimaryButton";
import { HeartIcon } from "@heroicons/react/16/solid";

function SectionTop({ id, title, synopsis, image }: PropsSectionTop) {
   console.log('id', id)

   return (
      <section className="w-3/4">
         <article>
            <div className="flex mb-10">
               <div className="w-1/2 flex justify-center">
                  <img src={image} alt="Portada" className="rounded-full" />
               </div>
               <div className="w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-10 justify- gap-5">
                     <h1 className=" text-5xl text-gray-50 font-bold flex">
                        {title}
                     </h1>
                     <button className="relative">
                        <HeartIcon className="w-14 h-14 text-primary-dark transform hover:scale-125 transition-opacity duration-300 hover:shadow-sm " />
                     </button>
                  </div>
                  <PrimaryButton>
                     Agregar a una lista
                  </PrimaryButton>

               </div>
            </div>
            <p className="text-3xl text-gray-50">
               {synopsis}
            </p>
         </article>
      </section>
   );
}

interface PropsSectionTop {
   id: number;
   title: string;
   synopsis: string;
   image: string;
}



export default SectionTop;