import { AuthCredentials } from '@models/AuthCredentials.model';
import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (credentials: AuthCredentials) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // Definición de estados para los campos de correo electrónico y contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Definición de estados para los mensajes de error
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Función para validar el correo electrónico
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejador de envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Inicializar el objeto de errores
    const validationErrors: { [key: string]: string } = {};

    // Validar que todos los campos estén llenos
    if (!email) validationErrors.email = 'El correo electrónico es requerido';
    if (!password) validationErrors.password = 'La contraseña es requerida';

    // Validar el formato del correo electrónico
    if (email && !validateEmail(email)) {
      validationErrors.email = 'El correo electrónico no es válido';
    }

    // Si hay errores, actualizar el estado y salir de la función
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Llamar la función onSubmit con las credenciales del usuario
    onSubmit({ email, password });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      {/* Campo de entrada para el correo electrónico */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>
      {/* Campo de entrada para la contraseña */}
      <div className="mb-6">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>
      {/* Botón para enviar el formulario */}
      <div className="flex items-center justify-center">
        <button className="bg-terciary-light text-white border-none py-2 cursor-pointer px-4 rounded" type="submit">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
