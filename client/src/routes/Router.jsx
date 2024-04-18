import { Routes, Route } from "react-router-dom";

import { Movies } from "../App";
import Landing from "../pages/Landing";

export default function router() {
  return <Routes>
    {/*  className="pt-20" */}
    <Route path="/" element={<Landing />} />
    <Route path="/movies-shows" element={<Movies />} />
    <Route path="/movies-shows/:id" element={<Movies />} />
    <Route path="/support" element={<>Support</>} />
    <Route path="/subscriptions" element={<>Subscription</>} />
    <Route path="*" element={<>page not found</>} />
  </Routes>
}