import { UserCredentials, UserDTO } from "@models/User.model"
import { useFetch } from "src/common/hooks/useFetch"
import { signinService } from "../services/signin.service"
import { signupService } from "../services/signup.service"
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess, } from "../../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/routes/routes";

export const useAuth = () => {
   const FetchCustom = useFetch();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSignin = async (user: UserCredentials) => {
      dispatch(loginStart());
      const userLogged = await signinService(FetchCustom)(user);
      if (typeof userLogged === 'boolean') {
         dispatch(loginFailure('Error al iniciar sesión'));
         return alert('Error al iniciar sesión');
      }

      dispatch(loginSuccess(userLogged));
      navigate(ROUTES.LANDING_PAGE);
   }

   const handleSignup = async (user: UserDTO) => {
      const response = await signupService(FetchCustom)(user);
      if (typeof response === 'boolean' && !response) {
         alert('Error al registrar usuario');
         return;
      }

      navigate(ROUTES.LOGIN);
   }

   return {
      handleSignin,
      handleSignup,
   }
}