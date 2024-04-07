import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Dashboard from "@hooks/pages/Dashboard";

function PrivateRoutes() {
   return (
      <Routes>
         <Route path="/dashboard" element={
            <RequireAuth>
               <Dashboard />
            </RequireAuth>
         } />
      </Routes>
   )
}



export default PrivateRoutes;