import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { ROUTES } from "./routes";

function RequireAuth({ children }: { children: React.ReactNode }) {
   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

   // TODO - Redirect to login page if user is not authenticated disabled for now
   if (isAuthenticated) {
      return <Navigate to={ROUTES.LOGIN} />;
   }

   return children;
}

export default RequireAuth;