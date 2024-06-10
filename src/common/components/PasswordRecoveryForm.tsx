import React, { useState } from 'react';

const PasswordRecoveryForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            console.log('Email:', email);
            // lógica para enviar el email de recuperación Preguntar a backend
        }
    };

    return (
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center">
            <h2 className="text-2xl text-white mb-6">Recuperar contraseña</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="correo@dominio.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                    {isValid && (
                        <svg
                            className="w-6 h-6 text-green-500 absolute right-2 top-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 mt-4 text-white rounded-md ${isValid ? 'bg-green-600' : 'bg-green-300 cursor-not-allowed'}`}
                    disabled={!isValid}
                >
                    Recuperar contraseña
                </button>
            </form>
            <div className="mt-4 text-white">
                <svg
                    className="w-6 h-6 inline-block mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2m4-4v4m0 0L8 8m4 4l4-4"
                    />
                </svg>
                soporte@filmhub.com
            </div>
        </div>
    );
};

export default PasswordRecoveryForm;