import CardMultimedia from "@components/CardMultimedia";
import { replaceParam } from "@utilities/formatParams.utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "src/routes/routes";

function ListsMultimedia() {
   const navigate = useNavigate();
   const { state: list } = useLocation();

   const handleNavigateTo = (id: number) => {
      navigate(replaceParam(ROUTES.SINGLE_ITEM, "id", id.toString()));
   };

   return (
      <main className="w-full p-5 items-center flex flex-col">
         <section className="flex flex-col w-full mt-5 text-gray-200">
            <h2 className="text-4xl font-bold">{list.name}</h2>
            <hr className="my-4 mb-6 border-gray-300" />

            {list.multimedia.length === 0 && (<div className="flex flex-col items-center justify-center mt-10">
               <svg
                  className="w-24 h-24 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M9.75 17l2.25-2.25L14.25 17m0 0L12 14.75M14.25 17h-4.5m7.5-6v2.25c0 1.209-.776 2.25-1.75 2.25h-6.5c-.974 0-1.75-1.041-1.75-2.25V11m10.5 0H3m3-5.5L12 3l6 2.5M7.5 6.5L12 8m4.5-1.5L12 8M3 11v10.5c0 .828.672 1.5 1.5 1.5h15c.828 0 1.5-.672 1.5-1.5V11M7.5 6.5h9m-9 0v1.25a1.75 1.75 0 003.5 0V6.5m5.5 0v1.25a1.75 1.75 0 003.5 0V6.5"
                  />
               </svg>
               <h3 className="text-2xl font-bold text-gray-400 mt-4">Lista vacía</h3>
               <p className="text-gray-400 mt-2">No hay elementos multimedia disponibles en este momento.</p>
            </div>)}

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
               {list.multimedia.map((multimedia) => (
                  <CardMultimedia
                     key={multimedia.id}
                     id={multimedia.id}
                     alt={`Imagen de ${multimedia.title}`}
                     image={multimedia.image}
                     title={multimedia.title}
                     navigateTo={() => handleNavigateTo(multimedia.id)}
                  />
               ))}
            </ul>
         </section>
      </main>
   );
}

export default ListsMultimedia;
