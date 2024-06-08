import React from 'react';

interface AuthToggleProps {
  isLogin: boolean;
  toggleAuth: () => void;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, toggleAuth }) => {
  return (
    <button onClick={toggleAuth}>
      {isLogin ? 'REGISTRAR' : 'LOGIN'}
    </button>
  );
};

export default AuthToggle;
