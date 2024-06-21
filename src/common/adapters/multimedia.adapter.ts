import { Multimedia } from "@models/Multimedia.model";

export const multimediaAdapter = (data): Multimedia => {
   return {
      id: data.id,
      title: data.titulo,
      sypnosis: data.sinopsis,
      director: data.director,
      release_date: data.fechaEstreno,
      rating: data.calificacion,
      cast: data.reparto.split(","),
      image: data.imagen,
      genre: data.generos?.split(",").join(", "),
      state: data.estado,
   };
}