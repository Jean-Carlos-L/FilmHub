import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Recovery from "../pages/PasswordRecoveryPage/PasswordRecoveryPage";
import Authentication from "src/pages/Auth/Authentication";

function PublicRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.LOGIN} element={<Authentication />} />
         <Route path={ROUTES.REGISTER} element={<Authentication />} />
         <Route path={ROUTES.RECOVERY} element={<Recovery />} />
      </Routes>
   );
}

export default PublicRoutes;
