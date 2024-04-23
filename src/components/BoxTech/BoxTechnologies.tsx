interface PropsTech {
  icon: React.ReactNode
  title: string
  desc: string
}

export default function BoxTechnologies({ icon, title, desc }: PropsTech) {
  return (
    <div className="flex flex-col justify-center items-center text-center lg:h-[13rem] lg:w-[13rem] bg-white p-3">
      <span className="mb-4">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
