import { useParams } from "react-router-dom";

import Featured from "../components/movies-shows/Featured";
import Information from "../components/details/Information";
import Seasons from "../components/details/Seasons";
import Sidebar from "../components/details/Sidebar";

export default function Details() {
  const { type } = useParams();

  return <div className="padding-inline mt-24">
    <Featured />

    <div className="lg:flex items-start gap-4 py-20">
      <div className="details-container">
        {type === "show" && <Seasons />}
        <Information />
      </div>
      <Sidebar />
    </div>

  </div>
}