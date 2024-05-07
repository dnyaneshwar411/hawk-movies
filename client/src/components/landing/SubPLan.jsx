const styleBtn = "w-full md:w-auto mt-4";

export default function SubPLan({ plan, yearly }) {
  return <div
    key={plan.id}
    className="bg-1 lg:w-1/3 mb-10 lg:mb-0 p-8 rounded-lg max-w-[400px] lg:max-w-none mx-auto"
  >
    <h4>{plan.title}</h4>
    <p className="my-4">{plan.description}</p>
    <p className="my-4"><span className="text-white font-bold text-3xl">${yearly ? plan.price * 12 : plan.price}</span> /{yearly ? "year" : "month"}</p>
    <button className={`btn-dark mr-4 ${styleBtn}`}>Start Free Trial</button>
    <button className={`btn-red ${styleBtn}`}>Choose Plan</button>
  </div>
}