import BarNavigation from "./BarNavigation";

export default function BarHeading({ title, info, carouselId }) {
  return <div>
    <div className="lg:flex items-center justify-between">
      <div>
        <h2>{title}</h2>
        {info && <p className="mt-4">{info}</p>}
      </div>
      <BarNavigation carouselId={carouselId} />
    </div>
  </div>
}