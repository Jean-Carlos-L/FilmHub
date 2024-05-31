import { Rating } from "@mui/material";

function SectionDetails({
   director,
   cast,
   duration,
   releaseDate,
   genre,
   rating,
   generalRating,
}: PropsSectionDetails) {
   return (
      <section className="bg-terciary-default mt-10 w-3/4 text-white">
         <div className="flex flex-1 p-5">
            <div className="w-2/4">
               <ul className="space-y-4">
                  <li className="flex items-start text-start">
                     <span className="font-semibold w-1/4">Director</span>
                     <span className="text-balance break-words max-w-xs w-3/4">{director}</span>
                  </li>
                  <hr className="border-t border-gray-400" />
                  <li className="flex items-start">
                     <span className="font-semibold w-1/4">Elenco</span>
                     <span className="text-balance break-words max-w-xs w-3/4">{cast.join(", ")}</span>
                  </li>
                  <hr className="border-t border-gray-400" />
                  <li className="flex items-start">
                     <span className="font-semibold w-1/4">Duración</span>
                     <span className="text-balance break-words max-w-xs w-3/4">{duration} min.</span>
                  </li>
                  <hr className="border-t border-gray-400" />
                  <li className="flex items-start">
                     <span className="font-semibold w-1/4">Estreno</span>
                     <span className="text-balance break-words max-w-xs w-3/4">{releaseDate}</span>
                  </li>
                  <hr className="border-t border-gray-400" />
                  <li className="flex items-start">
                     <span className="font-semibold w-1/4">Género</span>
                     <span className="text-balance break-words max-w-xs w-3/4">{genre}</span>
                  </li>
                  <hr className="border-t border-gray-400" />
               </ul>
            </div>
            <div className="w-2/4 flex justify-center flex-col items-center">
               <div className="mb-6 flex flex-col text-center">
                  <span className="text-5xl">{rating}</span>
                  <Rating
                     name="half-rating-read"
                     defaultValue={rating}
                     precision={0.5}
                     size="large"
                     readOnly
                  />
               </div>
               <div className="mb-6 flex flex-col text-center">
                  <span className="text-5xl">{generalRating}</span>
                  <Rating
                     name="half-rating-read"
                     defaultValue={generalRating}
                     precision={0.1}
                     size="large"
                     readOnly
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

interface PropsSectionDetails {
   director: string;
   cast: string[];
   duration: number;
   releaseDate: string;
   genre: string;
   rating: number;
   generalRating: number;
}

export default SectionDetails;
