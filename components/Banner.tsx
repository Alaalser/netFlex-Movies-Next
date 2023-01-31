import { modalState, movieState } from "@/atom/modalAtom";
import { baseUrl } from "@/utils/constants/movie";
import { Movie } from "@/utils/types";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="banner"
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <h1
        className="
        text-2xl font-bold md:text-4xl lg:text:7xl
        "
      >
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-2 md:space-x-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h7 md:w-7 " />
          Play
        </button>
        <button
          className="bannerButton bg-[grey]/70"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info
          <InformationCircleIcon className="h-5 w-5 md:h-5 md:w-8 " />
        </button>
      </div>
    </div>
  );
}

export default Banner;
