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
      title: "The Shawshank Redemption",
      sypnosis:
         "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      director: "Frank Darabont",
      release_date: "1994",
      rating: 5,
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      state: 1,
      image:
         "data:image/jpeg;base64,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",
      genre: "Drama",
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
      image: "thedarkknight.jpg",
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
      image: "inception.jpg",
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
      image: "interstellar.jpg",
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
      image: "thematrix.jpg",
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
      image: "fellowshipofthering.jpg",
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
      image: "gladiator.jpg",
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
      image: "fightclub.jpg",
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
      image: "forrestgump.jpg",
      genre: "Action, Drama",
   },
   {
      id: 10,
      title: "The Shawshank Redemption",
      sypnosis:
         "Dos hombres encarcelados crean un vínculo a lo largo de varios años, encontrando consuelo y, eventualmente, redención a través de actos de decencia común.",
      director: "Frank Darabont",
      release_date: "1994",
      rating: 5,
      cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      state: 1,
      image: "shawshankredemption.jpg",
      genre: "Action",
   },
];

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