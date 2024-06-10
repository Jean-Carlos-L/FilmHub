import { Route, Routes } from "react-router-dom";
import { ROUTES } from './routes'
import Recovery from '../pages/PasswordRecoveryPage/PasswordRecoveryPage'


function PublicRoutes() {
   return (
      <Routes>
         {/* Cambiar el compoente de la ruta login para que sea el componente de la página de login */}
         <Route path={ROUTES.LOGIN} element={
            <><h1>Login Route</h1></>
            } />
         <Route path={ROUTES.RECOVERY} element={<Recovery />} />
      </Routes>
   )
}

export default PublicRoutes;