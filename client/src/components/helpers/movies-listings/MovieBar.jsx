import { useQuery } from "@tanstack/react-query";

import BarHeading from "./BarHeading";
import Cards from "./Cards";
import { retrieve } from "../../../utils/user";
import Error from "../Error";

export default function MovieBar({
    endpoint = "movie-shows/movie/popular",
    carouselId,
    cardsType = "cards-sm",
    creationType = "show",
    title,
    component,
    description
  }) {
  const { isLoading, data, error } = useQuery({
    queryKey: [endpoint],
    queryFn: () => retrieve(endpoint)
  });
  return <div>
    <BarHeading
      carouselId={carouselId}
      description={description}
      title={title}
    />

    {!isLoading && data.success && <Cards
      carouselId={carouselId}
      cardsType={cardsType}
      creations={data.payload.results}
      creationType={creationType}
      component={component}
    />}

    {isLoading && <Skeleton cardsType={cardsType} />}

    {(!data?.success || error) && <Error cardsType={cardsType} />}
  </div>
}

function Skeleton({cardsType}) {
  return <div className={`w-full ${cardsType} my-4 flex gap-8 overflow-hidden`}>
    {Array.from({length: 4}, (_, i) => i).map(index => <div key={index} className={`carousel-card aspect-square rounded-lg animate-skeleton`}></div>)}
  </div>
}