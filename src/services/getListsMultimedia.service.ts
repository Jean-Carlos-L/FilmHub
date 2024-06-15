import { Multimedia } from "@models/Multimedia.model";
import { multimediaAdapter } from "src/common/adapters/multimedia.adapter";
import { FetchCustom } from "src/common/hooks/useFetch";

export const getListsMultimediaService = (fetch: FetchCustom) => async (id: number): Promise<Multimedia[]> => {
   try {
      const url = `${import.meta.env.BASE_URL}/lists/${id}/multimedia`;
      const response = await fetch<Multimedia[]>(url);
      return response.data.map(multimediaAdapter);
   } catch (error) {
      return [
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
   }
}