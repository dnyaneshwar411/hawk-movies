import { useEffect } from "react";
import MovieBar from "../components/helpers/movies-listings/MovieBar";
import FAQs from "../components/landing/FAQs";
import Facilities from "../components/landing/Facilities";
import Hero from "../components/landing/Hero";
import Subscription from "../components/landing/Subscription";
import useScroll from "../hooks/useScroll";

export default function Landing() {
  const {scroller} = useScroll(0, 0);
  scroller();

  return <div>
    <Hero />
    <div className="padding-inline">
      <div className="block-margin">
        <MovieBar
          endpoint="movies/popular"
          cardsType="cards-md mb-14 lg:mb-20"
          carouselId="explore-movies"
          title="Popular Movies"
          component="release-date"
          creationType="movies"
          info="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
      </div>
      <Facilities />
      <FAQs />
      <Subscription />
    </div>
  </div>
}