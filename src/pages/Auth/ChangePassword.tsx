import { TextField } from "@mui/material";
import { useUserCommand } from "src/common/hooks/useUserCommand";

function ChangePassword() {
   const { handleChangePassword } = useUserCommand();

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const password = (form.elements[0] as HTMLInputElement).value;
      const token = new URLSearchParams(window.location.search).get("token") || "";
      handleChangePassword(password, token);
   }

   return (
      <main className="container mx-auto p-6 max-w-md">
         <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
            <div>
               <TextField
                  variant="filled"
                  label="Nueva contraseña"
                  type="password"
                  className="w-full bg-gray-700 text-white focus:bg-gray-600 focus:outline-none rounded-md p-2"
               />
            </div>
            <button
               type="submit"
               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
               Restablecer contraseña
            </button>
         </form>
      </main>
   )
}

export default ChangePassword;