import { Routes, Route } from "react-router-dom";

import MoviesShows from "../pages/MoviesShows";
import Landing from "../pages/Landing";
import Details from "../pages/Details";
import Support from "../pages/Support";

export default function router() {
  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/movies-shows" element={<MoviesShows />} />
    <Route path="movies-shows/:type/:id" element={<Details />} />
    <Route path="/support" element={<Support />} />
    <Route path="/subscriptions" element={<>Subscription</>} />
    <Route path="*" element={<>page not found</>} />
  </Routes>
}