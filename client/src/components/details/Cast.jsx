import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { infoStyles } from "../../utils/styles";
import { scrollMoviesBar } from "../../utils/events";

export default function Cast({ data }) {
  function scrollToLeft(carouselId) {
    scrollMoviesBar(carouselId, -1);
  }

  function scrollToRight(carouselId) {
    scrollMoviesBar(carouselId);
  }
  return <div className={`mb-4 ${infoStyles} grow`}>
    <div className="flex justify-between items-center mb-4">
      <p>Cast</p>
      <div className="flex">
        <ArrowLeftIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full mr-2" onClick={() => scrollToLeft("cast-carousel")} />
        <ArrowRightIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full" onClick={() => scrollToRight("cast-carousel")} />
      </div>
    </div>

    <div id="cast-carousel" className="w-full custom-scrollbar lg:no-scrollbar lg:snap-x flex gap-2 overflow-x-auto">
      {data.credits.cast.map((cast, index) => <img
        key={index}
        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
        className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2 object-cover"
      />)}
    </div>
  </div>
}