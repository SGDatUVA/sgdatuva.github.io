import Image from "next/image";
import Link from "next/link";

const Gamecard = ({ className, gameInfo, flipped=false }) => {
  return (
    <Link href={gameInfo.url} className={className + " w-4/5 md:w-1/2 lg:w-[30%] h-40 flex align-center bg-background-alt rounded-lg drop-shadow-lg" + (flipped ? " flex-row-reverse" : "")}>
      <div className="min-h-full aspect-square relative">
        <Image 
          className={flipped ? "rounded-r-lg" : "rounded-l-lg"}
          src={"/thumbnails/" + gameInfo.thumbnail}          
          fill
          object-fit="contain"
          alt="Controller Logo"
        />
      </div>
      <div className={"pt-2 px-1.5 flex flex-col text-primary text-sm xl:text-base leading-none" + (flipped ? " text-right" : "")}>
        <h3 className="font-bold text-xl xl:text-2xl text-secondary leading-none">
          {gameInfo.name}
        </h3>
        <p className="mb-4">{gameInfo.engine}, {gameInfo.dimension}</p>
        <p>{gameInfo.description}</p>
      </div>
    </Link>

  );
};

export default Gamecard;