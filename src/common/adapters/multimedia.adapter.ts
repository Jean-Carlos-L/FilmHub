import { Multimedia } from "@models/Multimedia.model";

export const multimediaAdapter = (data): Multimedia => {
   return {
      id: data.id,
      title: data.title,
      sypnosis: data.sypnosis,
      director: data.director,
      release_date: data.release_date,
      rating: data.rating,
      cast: data.cast,
      image: data.image,
      genre: data.genre,
      state: data.state,
   };
}