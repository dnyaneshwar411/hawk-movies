import FormControl from "../helpers/FormControl";

export default function Form() {
  return <form className="bg-2 md:w-4/6 max-w-[600px] mx-auto mt-8 p-8 border-2 border-[#262626] rounded-md">
    <div className="md:grid grid-cols-2 gap-x-4 gap-y-8">
      <FormControl id="name" label="First Name" type="text" placeholder="Enter First Name" />
      <FormControl id="surname" label="Last Name" type="text" placeholder="Enter Last Name" />
      <FormControl id="email" label="Email" type="email" placeholder="Enter Your Email" />
    </div>

    <h3 className="mt-8">Message</h3>
    <textarea className="input focus:outline-none mt-4" rows={5} placeholder="Enter your message" />

    <div className="mt-8 md:flex justify-between items-center">
      <div className="mb-4 md:mb-0 flex gap-2">
        <input id="checkbox" type="checkbox" className="bg-2" />
        <label htmlFor="checkbox"><p>I agree with Terms of Use and Policy Privacy</p></label>
      </div>
      <button className="btn-red">Send Message</button>
    </div>
  </form>
}