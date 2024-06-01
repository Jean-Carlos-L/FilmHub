import CardMultimedia from "@components/CardMultimedia";

function SectionMostViewed() {
   return (
      <section className="flex flex-col w-full mt-5 text-gray-200">
         <h2 className="text-4xl font-bold">
            Sugerencias
         </h2>
         <hr className="my-4 mb-6 border-gray-300" />

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {
               Array.from({ length: 7 }, (_, i) => (
                  <CardMultimedia
                     key={i}
                     title={"Titulo"}
                     image={"https://via.placeholder.com/200"}
                     alt="lkdjf;lksa"
                  />
               ))
            }
         </div>
      </section>
   )
}

export default SectionMostViewed;