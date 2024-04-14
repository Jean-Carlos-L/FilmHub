import { useParams } from "react-router-dom";
import SectionTop from "./components/SectionTop";

function SingleItem() {
  const { id } = useParams();

  return (
    <main className="container p-5">
      <SectionTop />

    </main>
  );
}

export default SingleItem;