import BarHeading from "./BarHeading";
import Cards from "./Cards";

export default function MovieBar({ carouselId, cardsType, tag, ranksIn, duration, views, released, rating, noOfSeasons, title, info }) {
  return <div>
    <BarHeading
      carouselId={carouselId}
      info={info}
      title={title}
    />

    <Cards
      carouselId={carouselId}
      cardsType={cardsType}
      tag={tag}
      ranksIn={ranksIn}
      duration={duration}
      views={views}
      released={released}
      rating={rating}
      noOfSeasons={noOfSeasons}
    />
  </div>
}