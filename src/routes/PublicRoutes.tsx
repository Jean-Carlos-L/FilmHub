import { Route, Routes } from "react-router-dom";
import { ROUTES } from './routes'
import AuthPage from "src/pages/LoginRegister/AuthPage";
import Recovery from '../pages/PasswordRecoveryPage/PasswordRecoveryPage'


function PublicRoutes() {
   return (
      <Routes>
         {/* Cambiar el compoente de la ruta login para que sea el componente de la página de login */}
         <Route path={ROUTES.LOGIN} element={
            <><AuthPage /></>
         } />
         <Route path={ROUTES.RECOVERY} element={<Recovery />} />
         <Route path={ROUTES.REGISTER} element={<AuthPage />} />

      </Routes>
   )
}

export default PublicRoutes;