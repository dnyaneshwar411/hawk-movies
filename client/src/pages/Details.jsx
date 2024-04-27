import { useParams } from "react-router-dom";

import Featured from "../components/movies-shows/Featured";
import Information from "../components/movies-shows/Information";
import Seasons from "../components/movies-shows/Seasons";
import Sidebar from "../components/movies-shows/Sidebar";

export default function Details() {
  const { type } = useParams();

  return <div className="padding-inline mt-24">
    <Featured />

    <div className="lg:flex gap-4 py-20">
      <div className="grow">
        <Information />
        {type === "show" && <Seasons />}
      </div>
      <Sidebar />
    </div>
  </div>
}