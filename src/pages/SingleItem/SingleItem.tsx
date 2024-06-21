import { useParams } from "react-router-dom";

import SectionTop from "./components/SectionTop";
import SectionDetails from "./components/SectionDetails";
import Forum from "./components/Forum";
import { useMultimediaById } from "src/common/hooks/useMultimedaiById";

function SingleItem() {
  const { id } = useParams();
  const { multimedia, loading } = useMultimediaById(id);

  return (
    <main className="w-full p-5 items-center flex flex-col lg:w-3/4 lg:mx-auto">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <SectionTop
            id={multimedia.id}
            title={multimedia.title}
            synopsis={multimedia.sypnosis}
            image={multimedia.image ?? "https://via.placeholder.com/200x300"}
          />

          <SectionDetails
            director={multimedia.director}
            releaseDate={multimedia.release_date}
            rating={multimedia.rating}
            cast={multimedia.cast}
            duration={0}
            genre={multimedia.genre}
            generalRating={4.5}
          />

          <Forum id={multimedia.id} />
        </>
      )}
    </main>
  );
}

export default SingleItem;
