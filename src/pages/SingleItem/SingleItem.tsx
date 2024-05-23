import { useParams } from "react-router-dom";
import SectionTop from "./components/SectionTop";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Multimedia } from "@models/Multimedia.model";
import { RootState } from "@redux/store";

function SingleItem() {
  const { id } = useParams();
  const items = useSelector((state: RootState) => state.items); // Add type annotation for 'state'

  const [currentItem] = useState<Multimedia>(() => {
    const item = items.find((item: Multimedia) => item.id === Number(id));
    if (!item) {
      return {
        id: 0,
        title: '',
        sypnosis: '',
        director: '',
        release_date: '',
        rating: 0,
        cast: [],
        state: 0
      }
    }

    return item;
  })


  return (
    <main className="container p-5 items-center flex flex-col">
      <SectionTop id={currentItem.id} title={currentItem.title} synopsis={currentItem.sypnosis} image="https://via.placeholder.com/200x300" />

    </main>
  );
}

export default SingleItem;