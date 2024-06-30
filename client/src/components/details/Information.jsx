import Cast from "./Cast"
import Description from "./Description"
import Reviews from "./Reviews"

export default function Information({ data }) {
  if(!data.overview) return <div className="w-full bg-[#141414] animate-skeleton mr-10"></div>
  return <div>
    {/* <Description data={data} /> */}
    <div className={`mb-4 info`}>
      <p className="mb-4">Description</p>
      <div>{data?.overview}</div>
    </div>
    <Cast data={data} />
    <Reviews data={data} />
  </div>
}