import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

function RoutesPages() {
   return (
      <BrowserRouter>
            <PublicRoutes />
            <PrivateRoutes />
      </BrowserRouter>
   )
}

export default RoutesPages;