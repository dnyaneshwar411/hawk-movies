import { ClockIcon } from "@heroicons/react/24/outline";

export default function Episode({ item }) {
  return <div className="py-8 lg:flex items-center gap-4 border-b-2 border-[#262626]">

    <div className="flex flex-row-reverse lg:flex-row gap-4 items-center">
      <div className="text-2xl text-[#707070] font-bold">
        {item.toString().padStart(2, 0)}
      </div>

      <img src="" className="grow lg:min-w-28 aspect-[16/12] rounded-md border-2 border-[#262626]" />
    </div>

    <div className="grow">
      <div className="lg:flex items-center justify-between">
        <h4 className="my-4 lg:my-0">Chapter One : The 1st Episode</h4>
        <p className="max-w-fit bg-1 px-2 py-1 rounded-md flex gap-2 border-2 border-[#262626]">
          <ClockIcon className="logo-md" />
          56 mins
        </p>
      </div>
      <p className="hidden lg:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed esse debitis eos expedita doloribus?</p>
    </div>

  </div>
}