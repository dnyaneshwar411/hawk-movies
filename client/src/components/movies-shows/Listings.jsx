import MoviesBar from "../helpers/movies-listings/MovieBar";

export default function Listings() {
  return <>
    <div id="movies" className="relative px-4 lg:px-10 pt-20 my-20 border-2 border-[#262626] rounded-lg">
      <span className="bg-[#E50000] absolute top-0 left-5 translate-y-[-50%] px-4 py-2 rounded-md">Movies</span>

      <MoviesBar carouselId="movies-1" cardsType="cards-sm mb-14 lg:mb-20" title="Our Genres" tag="Action" />

      <MoviesBar carouselId="movies-2" cardsType="cards-md mb-14 lg:mb-20" title="Popular Top 10 In Genres" ranksIn="Top 10 In" tag="Comedy" />

      <MoviesBar carouselId="movies-3" cardsType="cards-sm mb-14 lg:mb-20" title="Trending Now" duration={100} views="2" />

      <MoviesBar carouselId="movies-4" cardsType="cards-sm mb-14 lg:mb-20" title="New Releases" released="10 April 2023" />

      <MoviesBar carouselId="movies-5" cardsType="cards-lg" title="Must - Watch Movies" duration={200} rating={{ amount: 10 }} />
    </div>

    <div id="shows" className="relative px-4 lg:px-10 pt-20 my-20 border-2 border-[#262626] rounded-lg">
      <span className="bg-[#E50000] absolute top-0 left-5 translate-y-[-50%] px-4 py-2 rounded-md">Shows</span>

      <MoviesBar carouselId="shows-1" cardsType="cards-sm mb-14 lg:mb-20" title="Our Genres" tag="Action" />

      <MoviesBar carouselId="shows-2" cardsType="cards-md mb-14 lg:mb-20" title="Popular Top 10 In Genres" ranksIn="Top 10 In" tag="Action" />

      <MoviesBar carouselId="shows-3" cardsType="cards-lg mb-14 lg:mb-20" title="Trending Shows Now" duration={500} noOfSeasons={4} />

      <MoviesBar carouselId="shows-4" cardsType="cards-lg mb-14 lg:mb-20" title="New Released Shows" duration={200} noOfSeasons={2} />

      <MoviesBar carouselId="shows-5" cardsType="cards-lg" title="Must - Watch Shows" duration={600} rating={{ amount: 10 }} />
    </div>
  </>
}