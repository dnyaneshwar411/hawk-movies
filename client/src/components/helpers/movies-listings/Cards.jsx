import Card from "./Card";

export default function Cards({ carouselId, cardsType = "cards-sm", tag, ranksIn, duration, views, released, noOfSeasons, rating }) {
  return <div id={carouselId} className={`w-full custom-scrollbar lg:no-scrollbar snap-x scroll-smooth pb-10 lg:pb-0 my-8 flex gap-4 overflow-x-auto ${cardsType}`}>
    {[1, 2, 3, 4, 5, 6, 7, 8].map(index => <Card
      key={index}
      index={index}
      tag={tag}
      ranksIn={ranksIn}
      duration={duration}
      views={views}
      released={released}
      rating={rating}
      noOfSeasons={noOfSeasons}
    />)}
  </div>
}