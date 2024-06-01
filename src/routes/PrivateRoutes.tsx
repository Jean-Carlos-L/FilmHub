import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import RequireAuth from "./RequireAuth";
import SingleItem from "src/pages/SingleItem/SingleItem";
import LandingPage from "src/pages/LandingPage/LandingPage";

function PrivateRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.LANDING_PAGE} element={
            <RequireAuth>
               <LandingPage />
            </RequireAuth>
         } />

         {/* Agregar las rutas necesarias para la aplicación aqui abajo */}

         <Route path={ROUTES.SINGLE_ITEM} element={
            <RequireAuth>
               <SingleItem />
            </RequireAuth>}
         />
      </Routes>
   )
}



export default PrivateRoutes;