import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Dashboard from "src/pages/Dashboard";
import SingleItem from "src/pages/SingleItem/SingleItem";

function PrivateRoutes() {
   return (
      <Routes>
         <Route path="/dashboard" element={
            <RequireAuth>
               <Dashboard />
            </RequireAuth>
         } />

         {/* Agregar las rutas necesarias para la aplicación aqui abajo */}

         <Route path="/single-item/:id" element={<RequireAuth>
            <SingleItem />
         </RequireAuth>} />

         <Route path="*" element={<Navigate to='/login' />} />
      </Routes>
   )
}



export default PrivateRoutes;