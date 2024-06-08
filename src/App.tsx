import './index.css';

function App() {
  return (
    <div className="container">
      <div className="login-section">
        <div className="logo-container">
          <div className="logo"></div>
          <h1>FILMHUB</h1>
          <button className="login-button">LOGIN</button>
        </div>
      </div>
      <div className="register-section">
        <h2>Crear una Cuenta</h2>
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
        <p>
          Al hacer clic en continuar, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a>.
        </p>
      </div>
    </div>
  );
}

export default App;