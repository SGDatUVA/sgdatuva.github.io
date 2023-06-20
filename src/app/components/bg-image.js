import Image from "next/image"

// If you want to use this componenet make sure that the parent has a position of "relative", "fixed", or "absolute" as per
// next.js documentation on fill attirbute of Image componenet 
// https://nextjs.org/docs/pages/api-reference/components/image#fill

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