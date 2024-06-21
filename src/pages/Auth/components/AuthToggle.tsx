function AuthToggle({ isLogin, toggleAuth }: AuthToggleProps) {
   return (
      <button
         className="bg-blue-900 text-white border-none py-2 px-4 mt-4 cursor-pointer rounded"
         onClick={toggleAuth}
      >
         {isLogin ? 'REGISTRAR' : 'LOGIN'}
      </button>
   )
}

interface AuthToggleProps {
   isLogin: boolean;
   toggleAuth: () => void;
}

export default AuthToggle;