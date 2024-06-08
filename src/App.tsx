import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(false);
  };

  const handleRegister = () => {
    setIsLogin(true);
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="login-section">
          <div className="logo-container">
            <h1>FILMHUB</h1>
            <button className="toggle-button" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      ) : (
        <div className="login-section">
          <div className="logo-container">
            <h1>FILMHUB</h1>
            <button className="toggle-button" onClick={handleRegister}>
              REGISTRAR
            </button>
          </div>
        </div>
      )}
      <div className="register-section">
        <h2>{isLogin ? 'Crear una Cuenta' : 'Iniciar Sesión'}</h2>
        {isLogin ? (
          <form>
            <input type="text" placeholder="Nombre(s)" name="firstName" />
            <input type="text" placeholder="Apellido(s)" name="lastName" />
            <input type="text" placeholder="Celular" name="phone" />
            <input type="email" placeholder="Correo Electrónico" name="email" />
            <div className="birthdate">
              <input type="text" placeholder="DD" name="day" />
              <input type="text" placeholder="MM" name="month" />
              <input type="text" placeholder="AA" name="year" />
            </div>
            <input type="password" placeholder="Contraseña" name="password" />
            <button type="submit">Crear Cuenta</button>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Correo Electrónico" name="email" />
            <input type="password" placeholder="Contraseña" name="password" />
            <button type="submit">Iniciar Sesión</button>
          </form>
        )}
        <p>
          {isLogin
            ? 'Al hacer clic en continuar, aceptas nuestros '
            : '¿No tienes una cuenta? '}
          <a href="#">{isLogin ? 'Términos de Servicio' : 'Crear una Cuenta'}</a>
          {isLogin && ' y '}
          {isLogin && <a href="#">Política de Privacidad</a>}
        </p>
      </div>
    </div>
  );
}

export default App;
