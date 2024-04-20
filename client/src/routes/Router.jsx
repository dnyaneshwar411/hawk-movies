import { Routes, Route } from "react-router-dom";
// import { lazyLoad } from "../utils/lazyLoad";

import Landing from "../pages/Landing";

// const Landing = lazyLoad("../pages/Landing");

export default function router() {
  return <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/movies-shows" element={<>Movies</>} />
    <Route path="/movies-shows/:id" element={<>Movies shows - 2</>} />
    <Route path="/support" element={<>Support</>} />
    <Route path="/subscriptions" element={<>Subscription</>} />
    <Route path="*" element={<>page not found</>} />
  </Routes>
}