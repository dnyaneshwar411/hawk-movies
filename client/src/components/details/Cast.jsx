import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { infoStyles } from "../../utils/styles";
import { scrollMoviesBar } from "../../utils/eventListeners";

export default function Cast() {
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
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">1</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">2</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">3</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">4</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">5</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">6</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">7</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">8</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">9</div>
      <div className="carousel-card min-w-28 snap-start aspect-square rounded-md border-2">10</div>
    </div>
  </div>
}