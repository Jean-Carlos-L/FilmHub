import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "src/routes/routes";
import AuthToggle from "./components/AuthToggle";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

function Authentication() {
   const location = useLocation();
   const navigate = useNavigate();
   const isLogin = location.pathname === ROUTES.LOGIN;

   const toggleAuth = () => navigate(isLogin ? ROUTES.REGISTER : ROUTES.LOGIN);


   /*   const handleLogin = (data) => {
        console.log(data);
     }
  
     const handleRegister = (data) => {
        console.log(data);
     }
   */
   return (
      <div className="flex h-screen w-full">
         <div className="flex-1 bg-terciary-default flex justify-center items-center">
            <div className="text-center">
               <h1 className="block text-white text-sm font-bold mb-2">FILMHUB</h1>
               <AuthToggle isLogin={isLogin} toggleAuth={toggleAuth} />
            </div>
         </div>
         <div className="flex-1 w-full bg-secondary-light rounded-md text-white flex flex-col justify-center items-center p-5">
            <h2 className="text-white mb-4">{isLogin ? 'Iniciar Sesión' : 'Crear una Cuenta'}</h2>
            {isLogin ? <SigninForm /> : <SignupForm />}
            <p className="text-white mt-4">
               {isLogin
                  ? '¿No tienes una cuenta? '
                  : 'Al hacer clic en continuar, aceptas nuestros '}
               <a className="text-white underline">{isLogin ? 'Crear una Cuenta' : 'Términos de Servicio'}</a>
               {!isLogin && ' y '}
               {!isLogin && <a className="text-white underline" >Política de Privacidad</a>}
            </p>
         </div>
      </div>
   )
}

export default Authentication;