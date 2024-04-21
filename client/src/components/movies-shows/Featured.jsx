import FeaturedInfo from "./FeaturedInfo"
import bgImg from "/featured.png"

export default function Featured() {
  return <div className="w-full bg-center bg-gradient-to-t from-[#141414] to-transparent h-[85vh] flex flex-col rounded-lg overflow-hidden262626" style={{ backgroundImage: `linear-gradient(to top, #141414, transparent), url(${bgImg})` }}>
    <FeaturedInfo />
  </div>
}