import { useState } from "react";
import FeaturedInfo from "../movies-shows/FeaturedInfo";
import Loader from "../helpers/Loader";

export default function Featured({creation}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(prev => prev === 0 ? 7 : prev - 1);
  const next = () => setCurrent(prev => prev === 7 ? 0 : prev + 1);

  if(!creation.videos) return <div className="w-full bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex items-center justify-center rounded-lg animate-skeleton">
    <Loader />
  </div>

  return (
    <div className="w-full bg-center bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex flex-col rounded-lg overflow-hidden262626 bg-cover relative">
    <iframe
      src={`https://www.youtube.com/embed/${creation.videos.results[current].id}?rel=0&enablejsapi=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
      className="absolute h-full w-full left-0 top-0 z-[-1]"
    />
    <FeaturedInfo
      title={creation.original_name || creation.original_title}
      prev={prev}
      next={next}
    />
    </div>
  )
};