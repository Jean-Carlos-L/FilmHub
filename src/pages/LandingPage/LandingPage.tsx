import { useFilter } from "src/common/hooks/useFilter";
import HeaderFilter from "./components/HeaderFilter";
import SectionFilter from "./components/SectionFilter";
import SectionMostViewed from "./components/SectionMostViewed";
import SectionSuggestions from "./components/SectionSuggestions";
import Header from "@components/ListaFav";

function LandingPage() {
   const {
      filterState,
      handleGenreClick,
      handleRatingChange,
      handleSearchTextChange,
      handleSearch,
      isFiltering,
   } = useFilter();

   return (
      <main className="w-full p-5 items-center flex flex-col">
         <Header />
         <HeaderFilter
            filterState={filterState}
            handleGenreClick={handleGenreClick}
            handleRatingChange={handleRatingChange}
            handleSearchTextChange={handleSearchTextChange}
            handleSearch={handleSearch}
         />

         {isFiltering ? (
            <SectionFilter {...filterState} />
         ) : (
            <>
               <SectionSuggestions />
               <SectionMostViewed />
            </>
         )}
      </main>
   );
}

export default LandingPage;
