import { useEffect, useState } from "react";
import { BellIcon, MagnifyingGlassIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { toggleBodyScroll } from "../../utils/eventListeners";

import Tabs from "./Tabs";
import Logo from "./Logo";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  const toggleSidebar = () => setToggled(prev => !prev);
  const hideSidebar = () => setToggled(false)

  useEffect(function () {
    toggleBodyScroll(toggled);
  }, [toggled]);

  return <nav className="bg-gradient-to-b from-[#0F0F0F] to-transparent padding-inline w-full fixed top-0 left-0 flex items-center justify-between py-4 backdrop-blur-[3px] z-30">
    <Logo />

    <Tabs toggled={toggled} setter={hideSidebar} />

    <div className="hidden lg:flex items-center gap-4 mt-4">
      <BellIcon className="logo-lg" />
      <MagnifyingGlassIcon className="logo-lg" />
    </div>

    <button onClick={toggleSidebar} className="w-12 bg-3 relative p-2 border-4 border-[#1a1a1a] rounded-md cursor-pointer lg:hidden z-10 mt-4">
      {toggled
        ? <XMarkIcon />
        : <Bars3BottomRightIcon />}
    </button>
  </nav>
}