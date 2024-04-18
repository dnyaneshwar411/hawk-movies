import BarNavigation from "./BarNavigation";

export default function BarHeading(params) {
  return <div>
    <div className="lg:flex items-start justify-between">
      <div>
        <h2>Explore our wide variety of categories</h2>
        <p className="mt-4">Whether youre looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
      </div>
      <BarNavigation {...params} />
    </div>
  </div>
}