import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import { PlusIcon, HandThumbUpIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export default function FeaturedInfo() {
  return <div className="text-center mt-auto">
    <h2>Avengers : EndGame</h2>
    <p className="mx-auto mt-4 hidden md:block max-w-[100ch]">With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos&#39;s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>

    <div className="mt-8 flex gap-4 items-center justify-center">
      <button className="btn-red flex items-center gap-2">
        <PlayIcon className="logo-md" />
        Play Now
      </button>
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <PlusIcon className="logo-md" />
      </button>
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <HandThumbUpIcon className="logo-md" />
      </button>
      <button className="bg-[#0f0f0f] p-4 border-2 border-[#262626] aspect-square">
        <SpeakerWaveIcon className="logo-md" />
      </button>
    </div>

    <div className="flex items-center justify-between mt-4 mx-10 mb-10">
      {/* onClick={scrollToLeft}  */}
      <ArrowLeftIcon className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]" />
      <div>
        {[1, 2, 3, 4].map(index => <div key={index} className={`w-4 h-[4px] ${index === 1 ? "bg-red-500" : "bg-[#333333]"} rounded-md inline-block mr-2`}></div>)}
      </div>

      {/* onClick={scrollToRight} */}
      <ArrowRightIcon className="w-10 bg-[#0F0F0F] p-2 cursor-pointer hover:bg-[#0f0f0f] hover:border-4 border-[#1a1a1a]" />

    </div>
  </div>
}