import Cast from "./Cast"
import Description from "./Description"
import Reviews from "./Reviews"

export default function Information() {
  return <div>
    <Description />
    <Cast />
    <Reviews />
  </div>
}