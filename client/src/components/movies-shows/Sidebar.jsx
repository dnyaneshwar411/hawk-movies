import { CalendarIcon, LanguageIcon, StarIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Review from "./Review";
import Position from "./Position";
import Cateorize from "./Cateorize";

const titleStyles = "flex items-center gap-2 mb-4";

export default function Sidebar() {
  return <aside className="bg-1 lg:min-w-96 lg:max-w-96 p-[32px] mt-4 lg:mt-0 border-2 border-[#262626] rounded-md">
    <div className="mb-8">
      <p className={titleStyles}><CalendarIcon className="logo-md" />Released Year</p>
      2022
    </div>

    <Cateorize Icon={LanguageIcon} title="Available Languages" categories={["English", "Hindi", "Tamil", "Telugu"]} />

    <div className="mb-8">
      <p className={titleStyles}><StarIcon className="logo-md" />Ratings</p>
      <div className="flex gap-2">
        <div className="bg-2 p-4 w-full border-2 border-[#262626] rounded-md">
          <h3>IMDb</h3>
          <Review rating={4} />
        </div>
        <div className="bg-2 p-4 w-full border-2 border-[#262626] rounded-md">
          <h3>Hawks</h3>
          <Review rating={3.5} />
        </div>
      </div>
    </div>

    <Cateorize Icon={Squares2X2Icon} title="Genres" categories={["Action", "Adventure", "Romantic - Comedy"]} />

    <Position position="Director" img="https://qph.cf2.quoracdn.net/main-qimg-16b5b9e8557559b73980d1c25f6eeb21-lq" name="Gulshan Kumar" location="India" />

    <Position position="Music" img="https://qph.cf2.quoracdn.net/main-qimg-16b5b9e8557559b73980d1c25f6eeb21-lq" name="Munmun Datta" location="India" />
  </aside>
}