import { Navigate } from "react-router-dom";

function RequireAuth({ children }: { children: React.ReactNode }) {
   //   const { user } = useAuth();
   const user = false;

   if (!user) {
      return <Navigate to="/login" />;
   }

   return children;
}

export default RequireAuth;