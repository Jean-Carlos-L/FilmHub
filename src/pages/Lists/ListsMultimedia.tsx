import CardMultimedia from "@components/CardMultimedia";
import { List } from "@models/List.model";
import { replaceParam } from "@utilities/formatParams.utils";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useListsMultimedia } from "src/common/hooks/useListsMultimedia";
import { useListsUser } from "src/common/hooks/useListsUser";
import { ROUTES } from "src/routes/routes";

function ListsMultimedia() {
   const navigate = useNavigate();
   const { id } = useParams();
   const { listsMultimedia, loading } = useListsMultimedia(Number(id));
   const { listsUser } = useListsUser();
   const list: List = useMemo(() => {
      return listsUser.find((list) => list.id === Number(id));
   }, [listsUser, id]);

   const handleNavigateTo = (id: number) => {
      navigate(replaceParam(ROUTES.SINGLE_ITEM, "id", id.toString()));
   };

   return (
      <main className="w-full p-5 items-center flex flex-col">
         <section className="flex flex-col w-full mt-5 text-gray-200">
            <h2 className="text-4xl font-bold">{list.name}</h2>
            <hr className="my-4 mb-6 border-gray-300" />
            {loading ? (
               <p className="text-gray-400">Loading...</p>
            ) : (
               <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {listsMultimedia.map((multimedia) => (
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
            )}
         </section>
      </main>
   );
}

export default ListsMultimedia;
