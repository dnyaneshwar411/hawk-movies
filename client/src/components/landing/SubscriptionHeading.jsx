const styleBtn = "inline-block px-4 py-2 rounded-md cursor-pointer";

export default function SubscriptionHeading({ yearly, setter }) {
  return <div className="lg:flex items-center justify-between">
    <div>
      <h2>Choose the plan that&#39;s right for you</h2>
      <p className="max-w-[100ch] mt-4">Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
    </div>
    <div className="w-max ml-auto mt-8 lg:mt-0 bg-[#0f0f0f] p-2 rounded-md border-2 border-[#262626]">
      <div
        className={`${styleBtn} ${!yearly && "bg-[#1f1f1f]"}`}
        onClick={() => setter(false)}
      >
        Monthly
      </div>
      <div
        className={`${styleBtn} ${yearly && "bg-[#1f1f1f]"}`}
        onClick={() => setter(true)}
      >
        Yearly
      </div>
    </div>
  </div>
}