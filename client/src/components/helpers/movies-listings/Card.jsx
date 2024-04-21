import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ClockIcon, EyeIcon, StarIcon, RectangleStackIcon } from "@heroicons/react/24/solid";

import movieCardImg from "/movie-card-img.png"

const flexTag = "bg-[#141414] p-2 rounded-3xl flex gap-1 border-2 border-[#262626]";

export default function Card({ tag, ranksIn, duration, views, released, rating, noOfSeasons, index }) {
  return <div className="carousel-card snap-start border-2 border-[#262626] bg-[#1A1A1A] p-6 rounded-lg">
    <img src={movieCardImg} className="w-full object-cover rounded-md" alt="poster" />

    <div className="text-sm flex items-center justify-between">

      <div>
        {ranksIn && <span className="bg-[#E50000] block px-4 py-2 rounded-md">{ranksIn}</span>}
        {tag && <div className="mt-2">{tag} - {index}</div>}
        {duration && <div className={`text-[#999999] mt-2 ${flexTag}`}>
          <ClockIcon className="logo-md" />{Math.floor(duration / 60)}h {Math.floor(duration % 60) + "mins"}
        </div>}
      </div>


      <div className="text-[#999999]">
        {views && <div className={`${flexTag} mt-2`}>
          <EyeIcon className="logo-md" />{views}k
        </div>}

        {rating && <div className={`${flexTag} mt-2`}>
          <div className="flex">
            <StarIcon className="text-[12px] w-3 text-[#e50000]" />
            <StarIcon className="text-[12px] w-3 text-[#e50000]" />
            <StarIcon className="text-[12px] w-3 text-[#e50000]" />
            <StarIcon className="text-[12px] w-3 text-[#e50000]" />
            <StarIcon className="text-[12px] w-3 text-[#e50000]" />
          </div>{rating.amount}k
        </div>}

        {noOfSeasons && <div className={`${flexTag} mt-2`}>
          <RectangleStackIcon className="logo-md" />{noOfSeasons} Season{noOfSeasons > 1 ? "s" : ""}
        </div>}

        {!views && !rating && !released && !noOfSeasons && < ArrowRightIcon className="logo-md" />}
      </div>

    </div>

    {released && <div className={`text-center text-sm text-[#999] ${flexTag} mt-2`}>
      Released at {released}
    </div>}

  </div >
}