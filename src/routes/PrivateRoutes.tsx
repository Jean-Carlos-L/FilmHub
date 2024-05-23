import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Dashboard from "src/pages/Dashboard";
import SingleItem from "src/pages/SingleItem/SingleItem";
import { ROUTES } from "./routes";

function PrivateRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.DASHBOARD} element={
            <RequireAuth>
               <Dashboard />
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