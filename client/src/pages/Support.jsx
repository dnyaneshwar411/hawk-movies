import FAQs from "../components/landing/FAQs";
import Form from "../components/support/Form";
import Heading from "../components/support/Heading";

export default function Support() {
  return <div className="padding-inline mt-32 mb-20">
    <div className=" lg:flex items-center gap-20">
      <Heading />
      <Form />
    </div>
    <FAQs />
  </div>
}