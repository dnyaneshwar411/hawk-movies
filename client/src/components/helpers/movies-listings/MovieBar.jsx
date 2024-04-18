import BarHeading from "./BarHeading";
import Cards from "./Cards";

export default function MovieBar(params) {
  return <div className="block-margin">
    <BarHeading {...params} />
    <Cards {...params} />
  </div>
}