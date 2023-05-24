import Image from "next/image"

export default function BgImage({source, className}) {
  const defaultOpacity = (className !== undefined && className.includes("opacity-")) ? "" : "opacity-20 "

  return (
    <Image 
      src={source}
      alt="Landing Hero"
      className={"object-cover -z-10 " + defaultOpacity + className}
      quality={100}
      fill
      priority
    />
  )
}