import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/24/solid";

import { infoStyles } from "../../utils/styles";
import Review from "./Review";
import { scrollMoviesBar } from "../../utils/eventListeners";

export default function Reviews() {

  function scrollToLeft(carouselId) {
    scrollMoviesBar(carouselId, -1);
  }

  function scrollToRight(carouselId) {
    scrollMoviesBar(carouselId);
  }

  return <div className={infoStyles}>
    <div className="mb-4 flex items-center justify-between">
      <p>Reviews</p>
      <button className="bg-2 flex gap-2 border-2 border-[#262626]">
        <PlusIcon className="logo-md" /> Add Your Review
      </button>
    </div>

    <div className="no-scrollbar snap-x flex gap-4 overflow-x-auto" id="review-carousel">
      <Review name="Aniket Roy" location="India" rating={5} />
      <Review name="Aniket Roy" location="India" rating={2} />
    </div>

    <div className="flex items-center justify-center gap-2 mt-8">
      <ArrowLeftIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full" onClick={() => scrollToLeft("review-carousel")} />

      {[1, 2, 3, 4].map(index => <div key={index} className={`w-4 h-[4px] ${index === 1 ? "bg-red-500" : "bg-[#333333]"} rounded-md`}></div>)}

      <ArrowRightIcon className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full" onClick={() => scrollToRight("review-carousel")} />
    </div>
  </div>
}