import { User } from '@models/User.model';
import React, { useState } from 'react';

interface RegisterFormProps {
  onSubmit: (user: User) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  // Definición de estados para los campos del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telefono, setPhone] = useState('');
  const [correo, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [contrasena, setPassword] = useState('');

  // Definición de estados para los mensajes de error
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Función para validar el correo electrónico
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función para calcular la edad a partir de la fecha de nacimiento
  const calculateAge = (birthdate: string): number => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Manejador de envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Inicializar el objeto de errores
    const validationErrors: { [key: string]: string } = {};

    // Validar que todos los campos estén llenos
    if (!firstName) validationErrors.firstName = 'El nombre es requerido';
    if (!lastName) validationErrors.lastName = 'El apellido es requerido';
    if (!telefono) validationErrors.phone = 'El número de celular es requerido';
    if (!correo) validationErrors.email = 'El correo electrónico es requerido';
    if (!birthdate) validationErrors.birthdate = 'La fecha de nacimiento es requerida';
    if (!contrasena) validationErrors.password = 'La contraseña es requerida';

    // Validar el formato del correo electrónico
    if (correo && !validateEmail(correo)) {
      validationErrors.email = 'El correo electrónico no es válido';
    }

    // Validar que el número de teléfono tenga 10 dígitos
    if (telefono && telefono.length !== 10) {
      validationErrors.phone = 'El número de celular debe tener 10 dígitos';
    }

    // Si hay errores, actualizar el estado y salir de la función
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Calcular la edad
    const edad = calculateAge(birthdate);

    // Llamar la función onSubmit con los datos del usuario
    onSubmit({ nombre: `${firstName} ${lastName}`, telefono, correo, edad, contrasena });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="firstname">
          Nombre(s)
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="firstname"
          type="text"
          placeholder="Nombre(s)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
      </div>
      {/* Campo de entrada para el apellido */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="lastname">
          Apellido(s)
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="lastname"
          type="text"
          placeholder="Apellido(s)"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
      </div>
      {/* Campo de entrada para el número de celular */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
          Celular
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="phone"
          type="text"
          placeholder="Celular"
          value={telefono}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
      </div>
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
          value={correo}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>
      {/* Campo de entrada para la fecha de nacimiento */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="birthdate">
          Fecha de Nacimiento
        </label>
        <input
          className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="birthdate"
          type="date"
          placeholder="Fecha de Nacimiento"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        {errors.birthdate && <p className="text-red-500 text-xs italic">{errors.birthdate}</p>}
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
          value={contrasena}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>
      {/* Botón para enviar el formulario */}
      <div className="flex items-center justify-center">
        <button className="bg-terciary-light text-white border-none py-2 cursor-pointer px-4 rounded" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
