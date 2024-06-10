import { useNavigate } from "react-router-dom";
import { replaceParam } from "@utilities/formatParams.utils";
import { ROUTES } from "src/routes/routes";
import { FilterState } from "src/common/hooks/useReducerFilter";
import { useFilteredMultimedia } from "src/common/hooks/useFilteredMultimedia";
import CardMultimedia from "@components/CardMultimedia";

function SectionFilter({ searchText, rating, genres, search }: FilterState) {
   const navigate = useNavigate();
   const { filteredMultimedia, loading } = useFilteredMultimedia({ searchText, rating, genres, search });

   return (
      <section className="flex flex-col w-full mt-5 text-gray-200">
         <h2 className="text-4xl font-bold">Series y peliculas filtradas</h2>
         <hr className="my-4 mb-6 border-gray-300" />

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {loading ? <p>Cargando...</p> :
               filteredMultimedia?.map((multimedia) => (
                  <CardMultimedia
                     key={multimedia.id}
                     id={multimedia.id}
                     title={multimedia.title}
                     image={multimedia.image}
                     alt={`Pelicula: ${multimedia.title}`}
                     navigateTo={() =>
                        navigate(replaceParam(ROUTES.SINGLE_ITEM, "id", multimedia.id))
                     }
                  />
               ))}
         </div>
      </section>
   );
}

export default SectionFilter;
