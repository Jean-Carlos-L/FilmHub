import { useState } from "react";
import Textfield from "./Textfield";
import { UserCredentials } from "@models/User.model";
import { useAuth } from "../hooks/useAuth";
import { checkEmail } from "@utilities/checkEmail.utils";

interface Errors {
   email: string;
   password: string;
}

function SigninForm() {
   const { handleSignin } = useAuth();
   const [errors, setErrors] = useState<Errors>({
      email: "",
      password: "",
   });

   const validations = (fields: UserCredentials) => {
      const errors: Errors = {
         email: "",
         password: "",
      };

      if (!fields.email) {
         errors.email = "El correo electrónico es requerido";
      }
      if (!checkEmail(fields.email)) {
         errors.email = "El correo electrónico no es válido";
      }
      if (!fields.password) {
         errors.password = "La contraseña es requerida";
      }

      return errors;
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try {
         e.preventDefault();
         const form = e.currentTarget;
         const fields: Errors = {
            email: (form.elements[0] as HTMLInputElement).value,
            password: (form.elements[1] as HTMLInputElement).value,
         };
         const validationErrors = validations(fields);
         const hasErrors = Object.values(validationErrors).some(
            (error) => error !== ""
         );
         if (hasErrors) {
            setErrors(validationErrors);
            return
            // Perform form submission logic here
         }

         await handleSignin(fields);
      } catch (error) {
         console.error(error)
      }
   };

   return (
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
         <Textfield
            id="email"
            label="Correo Electrónico"
            type="email"
            placeholder="Correo Electrónico"
            error={errors.email}
         />
         <Textfield
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            error={errors.password}
         />
         <div className="flex items-center justify-center">
            <button
               className="bg-terciary-light text-white border-none py-2 cursor-pointer px-4 rounded"
               type="submit"
            >
               Iniciar Sesión
            </button>
         </div>
      </form>
   );
}

export default SigninForm;
