import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

function RequireAuth({ children }: { children: React.ReactNode }) {
   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

   if (!isAuthenticated) {
      return <Navigate to="/login" />;
   }

   return children;
}

export default RequireAuth;