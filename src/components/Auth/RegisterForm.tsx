import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Nombre(s)" name="firstName" />
      <input type="text" placeholder="Apellido(s)" name="lastName" />
      <input type="text" placeholder="Celular" name="phone" />
      <input type="email" placeholder="Correo Electrónico" name="email" />
      Fecha de Nacimiento
      <div className="birthdate">
        <input type="text" placeholder="DD" name="day" />
        <input type="text" placeholder="MM" name="month" />
        <input type="text" placeholder="AA" name="year" />
      </div>
      <input type="password" placeholder="Contraseña" name="password" />
      <button type="submit">Crear Cuenta</button>
    </form>
  );
};

export default RegisterForm;
