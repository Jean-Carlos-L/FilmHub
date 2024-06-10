import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../common/components/auth/LoginForm.tsx';
import RegisterForm from '../../common/components/auth/RegisterForm.tsx';
import AuthToggle from '../../common/components/auth/AuthToggle.tsx';
import { AuthCredentials } from '../../common/models/AuthCredentials.model.ts';
import { User } from '../../common/models/User.model.ts';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === '/login';

  // Función para alternar entre el formulario de login y el de registro
  const toggleAuth = () => {
    navigate(isLogin ? '/register' : '/login');
  };

  const handleLogin = (credentials: AuthCredentials) => {
    console.log('Login with:', credentials);
    // lógica para la validación de credenciales
    if (credentials.email === 'user@example.com' && credentials.password === 'password123') {
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleRegister = (user: User) => {
    console.log('Register with:', user);
    // Lógica de registro de usuario
    navigate('/login'); // Redirige al usuario al formulario de inicio de sesión después del registro
  };

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
        {isLogin ? <LoginForm onSubmit={handleLogin} /> : <RegisterForm onSubmit={handleRegister} />}
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
  );
};

export default AuthPage;