import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useParams } from "react-router-dom";

import { Multimedia } from "src/common/models/Multimedia.model";
import SectionTop from "./components/SectionTop";
import SectionDetails from "./components/SectionDetails";
import Forum from "./components/Forum";
import Header from "@components/ListaFav";

function SingleItem() {
  const { id } = useParams();
  const items = useSelector((state: RootState) => state.items);

  const [currentItem] = useState<Multimedia>(() => {
    const item = items.find((item: Multimedia) => item.id === Number(id));
    if (!item) {
      return {
        id: 0,
        title: "",
        sypnosis: "",
        director: "",
        release_date: "",
        rating: 0,
        cast: [],
        state: 0,
        genre: "",
        image: "",
      };
    }

    return item;
  });

  return (
    <main className="w-full p-5 items-center flex flex-col lg:w-3/4 lg:mx-auto">
      <Header />
      <SectionTop
        id={currentItem.id}
        title={currentItem.title}
        synopsis={currentItem.sypnosis}
        image={currentItem.image ?? "https://via.placeholder.com/200x300"}
      />

      <SectionDetails
        director={currentItem.director}
        releaseDate={currentItem.release_date}
        rating={currentItem.rating}
        cast={currentItem.cast}
        duration={120}
        genre={currentItem.genre}
        generalRating={4.5}
      />

      <Forum id={currentItem.id} />
    </main>
  );
}

export default SingleItem;
