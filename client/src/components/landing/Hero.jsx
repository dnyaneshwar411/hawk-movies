import heroImg from "/hero-banner-2.png"

export default function Hero() {
  return <>
    <div className="bg-cover bg-center h-[80vh] lg:h-[90vh] flex flex-col" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="padding-inline text-center bg-gradient-to-t from-[#141414] to-transparent mt-auto">
        <h1>The Best Streaming Experience</h1>
        <p className="mx-auto mt-8">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. <span className="hidden md:inline">With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</span></p>
      </div>
    </div>
    <button className="btn-red my-8 block mx-auto">Start Watcing Now</button>
  </>
}