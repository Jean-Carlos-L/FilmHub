import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "src/common/components/Layout";

function RoutesPages() {
   return (
      <BrowserRouter>
         <Layout>
            <PublicRoutes />
            <PrivateRoutes />
         </Layout>
      </BrowserRouter>
   )
}

export default RoutesPages;