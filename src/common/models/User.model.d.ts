export interface User {
   id: number;
   token: string;
   email: string;
}

export interface UserAll {
   id: number;
   email: string;
   name: string;
   phone: string;
   birthdate: number;
   genres: string[];
}

export interface UserCredentials {
   email: string;
   password: string;
}

export interface UserDTO {
   firstName: string;
   lastName: string;
   phone: string;
   email: string;
   birthdate: number;
   password: string;
}

export interface UserUpdateDTO {
   fullName: string;
   phone: string;
   email: string;
   password: string;
   birthdate?: number;
   genres: string[];
}

// Spanish


export interface UserDTOes {
   nombre: string;
   telefono: string;
   correo: string;
   edad: number;
   contrasena: string;
}

export interface UserUpdateDTOes {
   nombre: string;
   telefono: string;
   correo: string;
   contrasena: string;
   edad?: number;
   idGeneros: string[];
}

export interface UserCredentialses {
   correo: string;
   contrasena: string;
}