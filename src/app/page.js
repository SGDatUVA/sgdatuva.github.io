import FAQ from '@/app/components/faq';
import Gamecard from '@/app/components/gamecard';
import Navbar from '@/app/components/navbar';
import SectionHeader from '@/app/components/section-header';
import Image from 'next/image';
import Link from 'next/link'

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
  }]

export default function Home() {
  return (
    <main>
      <Navbar currentPage="Home"/>

      {/* Hero */}
      <div className="h-64 relative flex justify-center">
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
        <div className='w-11/12 flex flex-col justify-center space-y-4
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


      {/* Fall Games */}
      <SectionHeader text="Fall 2023 Games"/>
      <div className='flex flex-col items-center space-y-5'>
        <Gamecard gameInfo={games[0]}/>
        <Gamecard gameInfo={games[1]} flipped={true}/>
        <Gamecard gameInfo={games[2]}/>
      </div>
      
      {/* FAQ */}
      <div className='bg-background-alt rounded-t-2xl pb-10'>
        <SectionHeader text="FAQ" className="pt-5"/>
        <div className='flex flex-col items-center space-y-4 text-xs'>
          <p className='w-3/4 text-primary text-center font-bold'>
            For an overview on how the club is structured, how teams are formed and games get developed check out our <Link href="/about"  className='underline underline-offset-2'>About Us</Link> page! 
          </p>
          <p className='w-3/4 pb-4 text-primary text-center font-bold'>
            {/* Remember to update discord link in navbar too */}
            Be sure to join discord <Link href="https://discord.gg/B5JYp7cwuC" className='underline underline-offset-2'>here</Link>! 
          </p>
          <FAQ question={"When are club-wide meetings?"} answer={"Every Thursday in Thornton E303 5:30pm - 7:00pm."}/>
          <FAQ question={"When are team meetings?"} answer={"Every director holds weekly meetings for game-specific development time. Ask in your team channel in the discord to find out what time that is."}/>
          <FAQ question={"How can I contact an officer?"} answer={"Join the discord and ping or private message anyone with the officer role! If email works better feel free to send a message to uvasgd@gmail.com."}/>
          <FAQ question={"Is it just game development?"} answer={"The club is primarily focused on collaborative game development, but we also hold social nights (with board games and video games), industry guest speaker talks and development workshops. There’s no commitment so come out to whatever interests you!"}/>
          <FAQ question={"Game Jams?"} answer={"We hold at least one game jam a semester where all skill levels in programming, music, art, game design start and finish a game in one weekend."}/>
          <p className='w-3/4 pt-4 text-primary text-center font-bold'>We’re open and interested in collaborating with students, CIOs, orgnizations, companies, other game dev clubs so please reach out to  uvasgd@gmail.com with any questions, comments, or inquiries. Thanks!</p>
        </div>
        
      
      </div>
      
      {/* Copyright */}
      <div className='h-8 flex items-center justify-center'>
        <p className='text-primary text-sm'>Copyright © Student Game Developers 2023</p>
      </div>
    </main>
  );
}
