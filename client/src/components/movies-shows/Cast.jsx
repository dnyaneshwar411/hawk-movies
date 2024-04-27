import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { infoStyles } from "../../utils/styles";

export default function Cast() {
  return <div className={`mb-4 ${infoStyles} grow`}>
    <div className="flex justify-between items-center mb-4">
      <p>Cast</p>
      <div className="flex">
        <ArrowLeftIcon className="logo-md tab p-2 mr-2" />
        <ArrowRightIcon className="logo-md tab p-2" />
      </div>
    </div>

    <div id="cast-carousel" className="flex gap-2">
      {/* <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div> */}
      {/* <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div> */}
      <div className="carousel-card w-28 aspect-square rounded-md border-2"></div>
    </div>
  </div>
}