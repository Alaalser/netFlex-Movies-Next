import { Movie } from "@/utils/types";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";

interface Props {
  movie: Movie | DocumentData;
  onClick: () => void;
}

function Thumbnail({ movie, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm md:rounded"
        fill
        alt="card"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Thumbnail;
