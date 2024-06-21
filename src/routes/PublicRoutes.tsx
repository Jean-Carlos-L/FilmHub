import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Recovery from "../pages/Auth/PasswordRecovery";
import Authentication from "src/pages/Auth/Authentication";
import ChangePassword from "src/pages/Auth/ChangePassword";

function PublicRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.LOGIN} element={<Authentication />} />
         <Route path={ROUTES.REGISTER} element={<Authentication />} />
         <Route path={ROUTES.RECOVERY} element={<Recovery />} />
         <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePassword />} />
      </Routes>
   );
}

export default PublicRoutes;
