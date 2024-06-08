import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form>
      <input type="email" placeholder="Correo Electrónico" name="email" />
      <input type="password" placeholder="Contraseña" name="password" />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
