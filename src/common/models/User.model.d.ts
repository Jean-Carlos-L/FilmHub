export interface User {
   id: number;
   name: string;
   email: string;
   token: string;
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