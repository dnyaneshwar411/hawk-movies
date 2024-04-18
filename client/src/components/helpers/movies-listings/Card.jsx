import { ArrowRightIcon } from "@heroicons/react/24/outline";

import movieCardImg from "/movie-card-img.png"

export default function Card({ tag = "Comedy", index }) {
  return <div className="carousel-card snap-start border-2 border-[#262626] bg-[#1A1A1A] p-6 rounded-lg">
    <img src={movieCardImg} className="w-full aspect-square" alt="" />
    <div className="flex justify-between mt-4">
      {tag} - {index}
      <ArrowRightIcon className="logo-md" />
    </div>
  </div>
}