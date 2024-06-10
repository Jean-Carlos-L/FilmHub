import { Multimedia } from "@models/Multimedia.model";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getMostVewedMultimediaService =
   (fetch: FetchCustom) =>
      async (params: { limit: number }): Promise<Multimedia[]> => {
         try {
            const url = `${import.meta.env.BASE_URL}/multimedia/most-viewed?limit=${params.limit
               }`;
            const response = await fetch<Multimedia[]>(url);
            const multimedia = response.data.map(multimediaAdapter);
            return multimedia;
         } catch (error) {
            console.error(error);
            return initialState;
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
      image: "spiderman2.jpg",
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
      genre: "Action",
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
