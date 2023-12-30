import Gamecard from './components/gamecard';
import Navbar from './components/navbar';
import SectionHeader from './components/section-header';
import Image from 'next/image';

const games = [{ 
    name: "Fae:Star",
    thumbnail: "faestar.png",
    engine: "Unity",
    dimension: "2D",
    description: "Turn-based RPG where you battle as four unique characters",
    url: "https://ianharvey.itch.io/fae-star" 
  },
  { 
    name: "Quicksilver",
    thumbnail: "quicksilver.png",
    engine: "Unity",
    dimension: "3D",
    description: "Physics-based platformer featuring a diverse move set to escape from the firewall",
    url: "https://buzjr.itch.io/quicksilver"
  },
  { 
    name: "Lantern's Lament",
    thumbnail: "lanterns-lament.png",
    engine: "Godot",
    dimension: "2D",
    description: "Puzzle game where you must conserve your lantern’s oil while exploring a dark maze",
    url: "https://kedrickfudala.itch.io/lanterns-lament"
  }
]

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="h-48 relative flex justify-center">
        <div className="absolute inset-0 -z-10 h-full blur-sm brightness-50	">
            <Image
              src="/landing-hero.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Landing Hero"
              priority
            />
        </div>
        <div className='w-11/12 flex flex-col justify-center space-y-2
        text-xs font-semibold text-center'> 
          <div> 
            Welcome to the homepage of Student Game Developers! We are a student-run organization focused on creating original games and expanding knowledge about game design as an art and industry.
          </div>
          <div> 
            The club is open all UVA students regardless of experience. Programmers, artists, writers, musicians, idea people or anybody who is just plain interested is encouraged to join! 
          </div>
          <div> 
            Check out how to get involved and some of our most recent game down below! 
          </div>
        </div>

      </div>
      <SectionHeader text="Fall 2023 Games"/>
      <div className='flex flex-col items-center space-y-5'>
        <Gamecard gameInfo={games[0]}/>
        <Gamecard gameInfo={games[1]} flipped={true}/>
        <Gamecard gameInfo={games[2]}/>
      </div>
    </main>
  );
}
