import Card from "./Card";

export default function Cards({ carouselId, cardsType = "cards-sm" }) {
  return <div id={carouselId} className={`w-full no-scrollbar snap-x scroll-smooth my-8 flex gap-4 overflow-x-auto ${cardsType}`}>
    {[1, 2, 3, 4, 5, 6, 7, 8].map(index => <Card
      key={index}
      index={index}
    />)}
  </div>
}