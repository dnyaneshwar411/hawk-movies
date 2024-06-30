import { infoStyles } from "../../utils/styles"

export default function Description({ data }) {
  return <div className={`mb-4 info`}>
    <p className="mb-4">Description</p>
    <div>{data?.overview}</div>
  </div>
}