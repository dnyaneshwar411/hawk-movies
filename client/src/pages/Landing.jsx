import Ad from "../components/helpers/Ad";
import MovieBar from "../components/helpers/movies-listings/MovieBar";
import FAQs from "../components/landing/FAQs";
import Facilities from "../components/landing/Facilities";
import Hero from "../components/landing/Hero";
import Subscription from "../components/landing/Subscription";

export default function Landing() {
  return <div>
    <Hero />
    <div className="padding-inline">
      <MovieBar carouselId="explore-movies" />
      <Facilities />
      <FAQs />
      <Subscription />
      <Ad />
    </div>
  </div>
}