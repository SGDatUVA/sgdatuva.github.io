import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import SGDLogo from '@/app/components/sgdlogo'
import BgImage from '@/app/components/bg-image'
import GameCard from './components/game-card'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Landing */}
      <div className='h-screen w-full flex flex-col'>
        <Navbar/>
        <div className='relative grow flex'>
          <BgImage source="/landing-hero.jpg" className="opacity-100"/>
          <SGDLogo className="w-80 h-80 fill-highlight lg:absolute lg:left-10 lg:bottom-10 "/>
        </div>
      </div>

      {/* Welcome Section */}
      <div className='h-[50vh] w-full relative flex flex-col items-center border-t-2 border-primary'>
        <BgImage source="/welcome-background.jpg"/>
        <div className='h-full w-[1060px] flex flex-col justify-center space-y-8 text-center font-medium text-xl break-normal'>
          <p>Welcome to the homepage of Student Game Developers! We are a student-run organization focused on creating original games and 
            expanding knowledge about game design as an art and industry.
          </p>
          <p >The club is open all UVA students regardless of experience. Programmers, artists, writers, musicians, idea people or anybody 
            who is just plain interested is encouraged to join!
          </p> 
          <p>Check out how to get involved and some of our most recent game down below!</p>
        </div>
      </div>

      {/* Last Semester Games Section */}
      <div className='h-[50vh] w-full relative border-t-2 border-primary'>
        <BgImage source="/stock-computer.jpg" className="object-center"/>
        <div className='h-full w-full flex items-center '>
          <h2 className='ml-8 text-4xl text-primary font-bold text-center basis-1/4'>Spring 2023<br/>Games</h2>
          <div className='flex space-x-8'>
              <GameCard name="Flammable Forest"/>
              <GameCard name="Across the Sea of Dust and Rot"/>
              <GameCard name="Dungeon Crab 2: Electric Boogaloo"/>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className='h-[50vh] w-full flex relative border-t-2 border-primary'>
        <BgImage source="/game-jam.png" className="object-center opacity-60"/>
        <div className='h-[100px] w-full bg-background self-end	border-t-2 border-primary flex items-center justify-center'>
          <p>Copyright © Student Game Developers 2023</p>
        </div>
      </div>

    </main>
  )
}
