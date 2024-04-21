import { Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import { lazyLoad } from "../utils/lazyLoad";
import MoviesShows from "../pages/MoviesShows";
import Landing from "../pages/Landing";

// import { NamedExport } from "../utils/imports";

// const Landing = lazyLoad("../pages/Landing");
// const MoviesShows = lazyLoad("../pages/MoviesShows");

export default function router() {
  return <Routes>
    {/* <Route path="/" element={<Suspense fallback={<div className="mt-40 text-3xl">Loading</div>}><Landing /></Suspense>} />
    <Route path="/movies-shows" element={<Suspense fallback="Loading..."><MoviesShows /></Suspense>} /> */}
    <Route path="/" element={<Landing />} />
    <Route path="/movies-shows" element={<MoviesShows />} />
    <Route path="/movies-shows/:id" element={<>Movies shows - 2</>} />
    <Route path="/support" element={<>Support</>} />
    <Route path="/subscriptions" element={<>Subscription</>} />
    <Route path="*" element={<>page not found</>} />
  </Routes>
}