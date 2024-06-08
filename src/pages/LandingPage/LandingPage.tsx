import HeaderFilter from "./components/HeaderFilter";
import SectionMostViewed from "./components/SectionMostViewed";
import SectionSuggestions from "./components/SectionSuggestions";

function LandingPage() {
   return (
      <main className="container p-5 items-center flex flex-col">
         <HeaderFilter />

         <SectionSuggestions />
         <SectionMostViewed />
      </main>
   );
}

export default LandingPage;