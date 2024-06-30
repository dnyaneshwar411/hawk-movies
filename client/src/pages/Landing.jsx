import MovieBar from "../components/helpers/movies-listings/MovieBar";
import FAQs from "../components/landing/FAQs";
import Facilities from "../components/landing/Facilities";
import Hero from "../components/landing/Hero";
import Subscription from "../components/landing/Subscription";

export default function Landing() {
  return <div>
    <Hero />
    <div className="padding-inline">
      <div className="block-margin">
        <MovieBar
          endpoint=""
          carouselId="explore-movies"
          title="Explore our wide variety of categories"
          info="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
      </div>
      <Facilities />
      <FAQs />
      <Subscription />
    </div>
  </div>
}