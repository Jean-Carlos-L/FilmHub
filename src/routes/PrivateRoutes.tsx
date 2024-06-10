import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import RequireAuth from "./RequireAuth";
import SingleItem from "src/pages/SingleItem/SingleItem";
import LandingPage from "src/pages/LandingPage/LandingPage";
import UserProfile from "src/pages/UserEdit/UserProfilePage";
import MovieList from "src/pages/MovieListaPage/MovieListaPage";

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

         <Route path={ROUTES.USER_PROFILE} element={
            <RequireAuth>
               <UserProfile />
            </RequireAuth>}
         />

         <Route path={ROUTES.MOVIELIST} element={
            <RequireAuth>
               <MovieList/>
            </RequireAuth>}
         />
      </Routes>
   )
}



export default PrivateRoutes;