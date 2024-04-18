export default function Facility({ Icon, title, description }) {
  return <div className="gradient-tr-bl max-w-[400px] md:max-w-[800px] mx-auto p-8 mb-5 md:mb-0 aspect-video rounded-lg border-2 border-[#262626]">
    <div className="flex items-center gap-4">
      <Icon className="w-12 text-red bg-[#1a1a1a] p-2 rounded-lg border-2 border-[#262626]" />
      <h3>{title}</h3>
    </div>

    <p className="mt-8">{description}</p>
  </div>
}