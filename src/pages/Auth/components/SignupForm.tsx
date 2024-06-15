import { UserDTO } from "@models/User.model";
import { useState } from "react";
import Textfield from "./Textfield";
import { useAuth } from "../hooks/useAuth";
import { checkEmail } from "@utilities/checkEmail.utils";
import { getYearsOfDate } from "@utilities/date.utils";

interface Errors {
   firstName: string;
   lastName: string;
   phone: string;
   email: string;
   birthdate: string;
   password: string;
}

function SignupForm() {
   const { handleSignup } = useAuth();
   const [errors, setErros] = useState<Errors>({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      birthdate: "",
      password: "",
   });

   const validations = (fields: UserDTO) => {
      const errors: Errors = {
         firstName: "",
         lastName: "",
         phone: "",
         email: "",
         birthdate: "",
         password: "",
      };

      if (!fields.firstName) {
         errors.firstName = "El nombre es requerido";
      }
      if (!fields.lastName) {
         errors.lastName = "El apellido es requerido";
      }
      if (!fields.phone) {
         errors.phone = "El número de celular es requerido";
      }
      if (!fields.email) {
         errors.email = "El correo electrónico es requerido";
      }
      if (!checkEmail(fields.email)) {
         errors.email = "El correo electrónico no es válido";
      }
      if (!fields.birthdate) {
         errors.birthdate = "La fecha de nacimiento es requerida";
      }
      if (!fields.password) {
         errors.password = "La contraseña es requerida";
      }

      return errors;
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fields: UserDTO = {
         firstName: (form.elements[0] as HTMLInputElement).value,
         lastName: (form.elements[1] as HTMLInputElement).value,
         phone: (form.elements[2] as HTMLInputElement).value,
         email: (form.elements[3] as HTMLInputElement).value,
         birthdate: getYearsOfDate((form.elements[4] as HTMLInputElement).value),
         password: (form.elements[5] as HTMLInputElement).value,
      };

      const errors = validations(fields);
      const hasErrors = Object.values(errors).some((value) => value !== "");
      if (hasErrors) {
         setErros(errors);
         return console.log("Validations", fields);
      }

      handleSignup(fields);
   };

   return (
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
         <Textfield
            id="firstname"
            label="Nombre(s)"
            type="text"
            placeholder="Nombre(s)"
            error={errors.firstName}
         />
         <Textfield
            id="lastname"
            label="Apellido(s)"
            type="text"
            placeholder="Apellido(s)"
            error={errors.lastName}
         />
         <Textfield
            id="phone"
            label="Celular"
            type="text"
            placeholder="Celular"
            error={errors.phone}
         />
         <Textfield
            id="email"
            label="Correo Electrónico"
            type="email"
            placeholder="Correo Electrónico"
            error={errors.email}
         />
         <Textfield
            id="birthdate"
            label="Fecha de Nacimiento"
            type="date"
            placeholder="Fecha de Nacimiento"
            error={errors.birthdate}
         />
         <Textfield
            id="password"
            label="Contraseña"
            type="password"
            placeholder="******************"
            error={errors.password}
         />

         <div className="flex items-center justify-center">
            <button
               className="bg-terciary-light text-white border-none py-2 cursor-pointer px-4 rounded"
               type="submit"
            >
               Registrarse
            </button>
         </div>
      </form>
   );
}

export default SignupForm;
