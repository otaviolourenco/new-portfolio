interface PropsButton {
  link: string
  title: string
}

export default function Button({ link, title }: PropsButton) {
  return (
    <a href={link} className="px-6 py-1 bg-primary text-white rounded-[42px]">
      {title}
    </a>
  )
}
