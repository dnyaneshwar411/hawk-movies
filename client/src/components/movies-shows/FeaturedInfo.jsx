import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { PlusIcon, HandThumbUpIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { controlIframeVideo } from "../../utils/events";
import { useState } from "react";

export default function FeaturedInfo({ prev, next, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleVideoPlaying() {
    setIsPlaying(prev => !prev);
    controlIframeVideo(isPlaying ? "pauseVideo" : "playVideo");
  };

  return <div className="text-center mt-auto">
    <h2>{title || "Avengers: Endgame"}</h2>

    <div className="mt-8 flex gap-4 items-center justify-center">
      {/* <button className="btn-red flex items-center gap-2" onClick={toggleVideoPlaying}>
        {isPlaying 
        ? <>
            <PauseIcon className="logo-md" />
            Pause
          </>
        : <>
            <PlayIcon className="logo-md" />
            Play
          </>
        }
      </button> */}
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <PlusIcon className="logo-md" />
      </button>
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <HandThumbUpIcon className="logo-md" />
      </button>
      {/* <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <SpeakerWaveIcon className="logo-md" />
      </button> */}
    </div>

    <div className="flex items-center justify-between mt-4 mx-10 mb-10">
      <ArrowLeftIcon
        className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]"
        onClick={prev}
      />
      <ArrowRightIcon
        className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]"
        onClick={next}
      />
    </div>
  </div>
}