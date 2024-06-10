import { Route, Routes } from "react-router-dom";
import { ROUTES } from './routes'
import AuthPage from "src/pages/LoginRegister/AuthPage";

function PublicRoutes() {
   return (
      <Routes>
         {/* Cambiar el compoente de la ruta login para que sea el componente de la página de login */}
         <Route path={ROUTES.LOGIN} element={<AuthPage/>} />

         {/* Agregar las rutas necesarias para la aplicación aqui abajo */}
         <Route path={ROUTES.REGISTER} element={<AuthPage/>} />

      </Routes>
   )
}

export default PublicRoutes;