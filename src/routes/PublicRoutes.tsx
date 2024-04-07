import { Route, Routes } from "react-router-dom";

function PublicRoutes() {
   return (
      <Routes>
         <Route path="/login" element={<h1>Login Route</h1>} />
      </Routes>

   )
}

export default PublicRoutes;