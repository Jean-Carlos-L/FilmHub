import { Route, Routes } from "react-router-dom";

function PublicRoutes() {
   return (
      <Routes>
         {/* Cambiar el compoente de la ruta login para que sea el componente de la página de login */}
         <Route path="/login" element={<h1>Login Route</h1>} />

         {/* Agregar las rutas necesarias para la aplicación aqui abajo */}
      </Routes>
   )
}

export default PublicRoutes;