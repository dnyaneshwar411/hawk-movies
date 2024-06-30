import Rating from "./Rating";

export default function Review({ name, location, rating, description }) {
  return <div className="carousel-card snap-start min-w-full lg:min-w-96 lg:w-1/2 bg-2 p-8 border-2 border-[#262626] rounded-md">
    <div className="flex items-center justify-between">
      <div className="mt-2">
        <h3>{name}</h3>
        <p>From {location}</p>
      </div>
      <span className="bg-1 px-2 pb-2 border-2 border-[#262626] rounded-full">
        {rating ? <Rating rating={rating / 2} /> : <p className="pt-2">Not Rated</p>}
      </span>
    </div>
    <p className="mt-4">{description.slice(0, 100)}{description.length > 100 && <>...</>}</p>
  </div>
}