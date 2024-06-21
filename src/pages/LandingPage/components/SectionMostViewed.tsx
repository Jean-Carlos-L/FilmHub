import { useNavigate } from "react-router-dom";
import { replaceParam } from "@utilities/formatParams.utils";
import { ROUTES } from "src/routes/routes";
import CardMultimedia from "@components/CardMultimedia";
import { useMostViewedMultimedia } from "src/common/hooks/useMostViewedMultimedia";

function SectionMostViewed() {
   const navigate = useNavigate();
   const { mostViewedMultimedia, loading } = useMostViewedMultimedia();

   return (
      <section className="flex flex-col w-full mt-5 text-gray-200">
         <h2 className="text-4xl font-bold">Mejores calificadas</h2>
         <hr className="my-4 mb-6 border-gray-300" />

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {loading && <p>Cargando...</p>}
            {mostViewedMultimedia?.map((multimedia) => (
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

export default SectionMostViewed;
