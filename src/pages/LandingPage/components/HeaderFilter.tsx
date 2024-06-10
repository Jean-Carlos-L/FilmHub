import { useState } from "react";
import PrimaryButton from "@components/PrimaryButton";
import Textfield from "@components/Textfield";
import ModalGenres from "@components/ModalGenres";
import { Chip, Slider } from "@mui/material";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { FilterState } from "src/common/hooks/useReducerFilter";
import { Genre } from "@models/Genre.model";

function HeaderFilter({
   filterState,
   handleSearchTextChange,
   handleRatingChange,
   handleGenreClick,
   handleSearch
}: PropsHeaderFilter) {
   const [showModal, setShowModal] = useState(false);

   return (
      <header className="flex flex-1 w-full bg-secondary-light p-1 rounded-md text-white">
         <div className="flex flex-grow me-1">
            <div className="flex flex-grow flex-col m-3">
               <Textfield
                  value={filterState.searchText}
                  handleChange={handleSearchTextChange}
               />
               <div className="flex">
                  <PrimaryButton
                     size="small"
                     className="w-fit"
                     onClick={() => setShowModal(true)}
                  >
                     Genero +
                  </PrimaryButton>
                  <div className="mx-2 space-x-3">
                     {filterState.genres.map((genre) => (
                        <Chip
                           key={genre.id}
                           label={genre.name}
                           style={{ color: "white", backgroundColor: "#040350" }}
                        />
                     ))}
                  </div>
                  <ModalGenres
                     show={showModal}
                     handleClose={() => setShowModal(false)}
                     selectedGenres={filterState.genres}
                     setSelectedGenres={handleGenreClick}
                  />
               </div>
            </div>
            <div className="w-1/6 p-2">
               <label className="font-semibold">
                  Calificacion {filterState.rating}
               </label>
               <Slider
                  value={filterState.rating}
                  onChange={(_: Event, value: number) => handleRatingChange(value)}
                  min={0}
                  max={5}
                  step={0.5}
               />
            </div>
         </div>
         <div className="flex-shrink">
            <PrimaryButton onClick={handleSearch}>
               <MagnifyingGlassIcon className="w-6 h-6" />
            </PrimaryButton>
         </div>
      </header>
   );
}

interface PropsHeaderFilter {
   filterState: FilterState;
   handleSearchTextChange: (text: string) => void;
   handleRatingChange: (rating: number) => void;
   handleGenreClick: (genre: Genre) => void;
   handleSearch: () => void;
}

export default HeaderFilter;
