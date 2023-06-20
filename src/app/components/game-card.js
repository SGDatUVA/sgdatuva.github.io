import BgImage from "./bg-image"

export default function GameCard({name, background, className}) {
  return(
    <div className={`relative bg-secondary h-60 w-64 rounded-lg text-primary hover:text-highlight flex
      border-4 border-current transition duration-150 ease-in-out` + className}>
      <BgImage source={background} className="opacity-100"/>
      <div className="h-1/3 w-full bg-background bg-opacity-20 self-end flex justify-center text-center items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  )
}