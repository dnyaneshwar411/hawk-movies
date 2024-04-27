import Featured from "../components/movies-shows/Featured";
import Listings from "../components/movies-shows/Listings";

export default function MoviesShows() {
  return <div className="padding-inline mt-24">
    <Featured />
    <Listings />
  </div>
}