export interface User {
   id: number;
   name: string;
   email: string;
   phone: string;
   birthdate: number;
   genres: Genre[];
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

export interface UserUpdateDTO {
   fullName: string;
   phone: string;
   email: string;
   password: string;
   birthdate?: number;
   genres: string[];
}