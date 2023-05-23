import Image from "next/image"

export default function BgImage({source, opacity}) {
  console.log(opacity);
  const opacityUtil = (opacity === undefined) ? "opacity-20" : `opacity-[${opacity/100}]`;
  return (
    <Image 
      src={source}
      alt="Landing Hero"
      className={"object-cover -z-10 " + opacityUtil}
      quality={100}
      fill
      priority
    />
  )
}