import support from "/support.png";

export default function Heading() {
  return <div className="max-w-[600px] mx-auto">
    <h2>Welcome to our support page</h2>
    <p className="my-4">We are here to help you any with any problems you may be having with our product.</p>
    <img src={support} className="w-full mt-4" />
  </div>
}