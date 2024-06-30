import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import Episode from './Episode';

export default function Season({ item, episodes }) {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="bg-2 my-4 p-8 rounded-md border-2 border-[#262626]">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h3>Season {item.toString().padStart(2, "0")}</h3>
        <p>{episodes} Episodes</p>
      </div>
      <span onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? <ArrowUpIcon className="logo-md" /> : <ArrowDownIcon className="logo-md" />}
      </span>
    </div>

    {isOpen && [1, 2, 3, 4].map(item => <Episode key={item} item={item} />)}

  </div>
}