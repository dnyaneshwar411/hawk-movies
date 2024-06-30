import { infoStyles } from "../../utils/styles";
import Season from "./Season";

export default function Seasons({creation, totalSeasons}) {
  return <div className={`mb-4 ${infoStyles}`}>
    <p className="pb-4 border-b-2 border-[#262626]">Seasons & Episodes</p>
    {Array.from({length: totalSeasons}, (_, i) => i).map(item => <Season
      key={item}
      item={item + 1}
      episodes={3 * (item + 1)}
    />)}
  </div>
}