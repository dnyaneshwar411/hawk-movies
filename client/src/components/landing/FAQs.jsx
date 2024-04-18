import { faqs } from "../../utils/data";

import FAQHeading from "./FAQHeading";
import FAQ from "./FAQ";

export default function FAQs() {
  return <div className="block-margin">
    <FAQHeading />

    <div className="md:grid grid-cols-2 place-content-start gap-x-10 mt-16">
      {faqs.map(faq => <FAQ key={faq.id} {...faq} />)}
    </div>
  </div>
}

