import React from 'react';

interface AuthToggleProps {
  isLogin: boolean;
  toggleAuth: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, toggleAuth }) => {
  return (
    <button
      className="bg-blue-900 text-white border-none py-2 px-4 mt-4 cursor-pointer rounded"
      onClick={toggleAuth}
    >
      {isLogin ? 'REGISTRAR' : 'LOGIN'}
    </button>
  );
};

export default AuthToggle;
