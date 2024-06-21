import { Multimedia } from "./Multimedia.model";

export interface List {
   id: number;
   name: string;
   multimedia: Multimedia[];
}

export interface MultimediaList {
   idLista: number;
   name: string;
   idMultimedia: number;
}