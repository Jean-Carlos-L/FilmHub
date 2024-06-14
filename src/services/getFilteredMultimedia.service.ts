import { Multimedia } from "@models/Multimedia.model";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";
import { FilterState } from "src/common/hooks/useReducerFilter";

export const getFilteredMultimediaService =
   (fetch: FetchCustom) =>
      async ({
         searchText,
         rating,
         genres,
      }: FilterState): Promise<Multimedia[]> => {
         try {
            const genresFormatted = genres.map((genre) => genre.name);
            const url = `${import.meta.env.BASE_URL
               }/cinema/multimedia/multimediasFiltros?calificacion=${rating},0&generos=${genresFormatted.join(',')}&titulo=${searchText}`;
            const response = await fetch<Multimedia[]>(url);
            const multimedia = response.data.map(multimediaAdapter);
            return multimedia;
         } catch (error) {
            console.error(error);
            return filterMovies({ movies: initialState, searchText, rating, genres })
         }
      };

function filterMovies({ movies, searchText = "", rating = null, genres = [] }) {
   const genresMap = genres.map(genre => genre.name.toLowerCase());
   let filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchText.toLowerCase());
   })

   if (rating) {
      filteredMovies = filteredMovies.filter(movie => movie.rating >= rating);
   }

   if (genres.length > 0) {
      filteredMovies = filteredMovies.filter(movie => {
         const movieGenres = movie.genre.split(", ").map(genre => genre.toLowerCase());
         return genresMap.some(genre => movieGenres.includes(genre));
      });
   }

   return filteredMovies;
}

const initialState: Multimedia[] = [
   {
      id: 1,
      title: "Spiderman 2",
      sypnosis:
         "Peter Parker se ve acosado por todo tipo de problemas en su malograda vida personal mientras lucha contra un brillante científico llamado Dr. Otto Octavius.",
      director: "Sam Raimi",
      release_date: "2004",
      rating: 4,
      cast: ["Tobey Maguire", "Kirsten Dunst", "James Franco"],
      state: 1,
      image:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx35ijRPVLiv88thqs1VlBlCvD-kvhN6sTlg&s",
      genre: "Action",
   },
   {
      id: 2,
      title: "The Dark Knight",
      sypnosis:
         "Batman asume la responsabilidad de proteger Gotham City del malvado Joker.",
      director: "Christopher Nolan",
      release_date: "2008",
      rating: 5,
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi1arS70w_kXQTF-GctH3Vz_vXSLK3ZxHVQ&s",
      genre: "Action",
   },
   {
      id: 3,
      title: "Inception",
      sypnosis:
         "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos es encargado de plantar una idea en la mente de un director general.",
      director: "Christopher Nolan",
      release_date: "2010",
      rating: 5,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst4d8lj72xNuuGSbj7e_UVZi2lQ86RC2FqQ&s",
      genre: "Action",
   },
   {
      id: 4,
      title: "Interstellar",
      sypnosis:
         "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
      director: "Christopher Nolan",
      release_date: "2014",
      rating: 5,
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTe2oCSoLdH12NupRRJ5kEaVhrZj_soh4o-Q&s",
      genre: "Action",
   },
   {
      id: 5,
      title: "The Matrix",
      sypnosis:
         "Un programador de computadoras descubre que la realidad que percibe es una simulación creada por máquinas inteligentes.",
      director: "The Wachowskis",
      release_date: "1999",
      rating: 5,
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlT7HFxKy00F-dF_gD82cIGrlle2xzxiTOEg&s",
      genre: "Action",
   },
   {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      sypnosis:
         "Un hobbit debe destruir un anillo poderoso para salvar la Tierra Media.",
      director: "Peter Jackson",
      release_date: "2001",
      rating: 5,
      cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s",
      genre: "Action",
   },
   {
      id: 7,
      title: "Gladiator",
      sypnosis:
         "Un general romano es traicionado y vendido como esclavo, pero se levanta para vengar la muerte de su familia y su emperador.",
      director: "Ridley Scott",
      release_date: "2000",
      rating: 5,
      cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      state: 1,
      image: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      genre: "Action",
   },
   {
      id: 8,
      title: "Fight Club",
      sypnosis:
         "Un oficinista insomne y un fabricante de jabón forman un club de lucha subterráneo que se convierte en algo mucho más.",
      director: "David Fincher",
      release_date: "1999",
      rating: 4,
      cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      state: 1,
      image: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      genre: "Action",
   },
   {
      id: 9,
      title: "Forrest Gump",
      sypnosis:
         "La presidencia de Kennedy, la guerra de Vietnam, el Watergate y otros eventos históricos vistos a través de los ojos de un hombre con coeficiente intelectual bajo.",
      director: "Robert Zemeckis",
      release_date: "1994",
      rating: 5,
      cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      state: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTL5_7lBqp2jrhPthEn-FU8Wu9bl67kIAwg&s",
      genre: "Action, Drama",
   },
   {
      id: 10,
      title: "Kung Fu Panda",
      sypnosis: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.",
      director: "Mark Osborne, John Stevenson",
      release_date: "2008",
      rating: 4.5,
      cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie", "Ian McShane"],
      state: 1,
      genre: "Animation, Action, Adventure",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvhtLQ80OqelAWJn4PsbFao1MQyh2B3EOeg&s"
   },
];