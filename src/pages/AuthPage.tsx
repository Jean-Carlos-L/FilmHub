import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm.tsx';
import RegisterForm from '../components/Auth/RegisterForm.tsx';
import AuthToggle from '../components/Auth/AuthToggle.tsx';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container p-5 items-center flex flex-col">
        <div>
      <div className="login-section">
        <div className="logo-container">
          <h1>FILMHUB</h1>
          <AuthToggle isLogin={isLogin} toggleAuth={toggleAuth} />
        </div>
      </div>
      <div className="register-section">
        <h2>{isLogin ? 'Iniciar Sesión' : 'Crear una Cuenta'}</h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p>
          {isLogin
            ? '¿No tienes una cuenta? '
            : 'Al hacer clic en continuar, aceptas nuestros '}
          {isLogin ? 'Click en el boton registrar' : 'Términos de Servicio'}
          {!isLogin && ' y '}
          {!isLogin && 'Política de Privacidad'}
        </p>
      </div>
      </div>
    </div>
  );
};

export default AuthPage;
