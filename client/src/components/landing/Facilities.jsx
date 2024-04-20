import { facilities } from "../../utils/data"
import Facility from "./Facility"

export default function Facilities() {
  return <div className="block-margin" id="devices">
    <h2>We Provide you streaming experience across various devices.</h2>
    <p className="max-w-[100ch] mt-4">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. <span className="hidden md:inline">Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</span></p>

    <div className="md:grid grid-cols-3 gap-5 mt-16">
      {facilities.map(item => <Facility
        Icon={item.icon}
        key={item.id}
        title={item.title}
        description={item.description}
      />)}
    </div>

  </div>
}