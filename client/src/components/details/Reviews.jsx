import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/24/solid";

import { infoStyles } from "../../utils/styles";
import Review from "./Review";
import { scrollMoviesBar } from "../../utils/events";

export default function Reviews({ data }) {
  if(data.reviews.results <= 0) return;

  const scrollToLeft = (carouselId) => scrollMoviesBar(carouselId, -1);
  const scrollToRight = (carouselId) => scrollMoviesBar(carouselId);

  return <div className={infoStyles}>
    <div className="mb-4 flex items-center justify-between">
      <p>Reviews</p>
      <button className="bg-2 flex gap-2 border-2 border-[#262626]">
        <PlusIcon className="logo-md" /> Add Your Review
      </button>
    </div>

    <div className="no-scrollbar snap-x flex gap-4 overflow-x-auto" id="review-carousel">
      {data.reviews.results.map(review => <Review
        key={review.id}
        name={review.author}
        location="India"
        rating={review.author_details.rating}
        description={review.content}
      />)}
    </div>

    <div className="flex items-center justify-center gap-2 mt-8">
      <ArrowLeftIcon
        className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full"
        onClick={() => scrollToLeft("review-carousel")}
      />
      <ArrowRightIcon
        className="w-10 bg-2 p-2 cursor-pointer border-2 border-[#262626] rounded-full"
        onClick={() => scrollToRight("review-carousel")}
      />
    </div>
  </div>
}