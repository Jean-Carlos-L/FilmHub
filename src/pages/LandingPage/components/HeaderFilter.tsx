import { useState } from "react";
import { Slider } from "@mui/material";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import PrimaryButton from "@components/PrimaryButton";
import Textfield from "@components/Textfield";


function HeaderFilter() {
   const [value, setValue] = useState('');

   return (
      <header className="flex flex-1 w-full bg-secondary-light p-1 rounded-md text-white">
         <div className="flex flex-grow me-1">
            <div className="flex flex-grow flex-col m-3">
               <Textfield value={value} handleChange={setValue} />
               <PrimaryButton size="small" className="w-fit">
                  Genero +
               </PrimaryButton>
            </div>
            <div className="w-1/6 p-2">
               <label className="font-semibold">Calificacion</label>
               <Slider />
            </div>
         </div>
         <div className="flex-shrink">
            <PrimaryButton>
               <MagnifyingGlassIcon className="w-6 h-6" />
            </PrimaryButton>
         </div>
      </header>
   )
}

export default HeaderFilter;