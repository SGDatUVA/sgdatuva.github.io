import SGDLogo from '@/app/components/sgdlogo'
import BgImage from '@/app/components/bg-image'
import GameCard from './components/game-card'
import FAQCard from './components/faq-card'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">

      {/* Landing*/}
      {/* 80 px is because Navbar componenet in app/layout.js is h-20 or 80px */}
      <div className='h-[calc(100vh-80px)] w-full flex flex-col'> 
        <div className='relative h-full flex flex-col items-center'>
          <BgImage source="/landing-hero.jpg" className="object-center opacity-80"/>
          <SGDLogo className="w-[70vw] fill-highlight md:w-80 md:h-80 md:absolute md:left-10 md:bottom-10 "/>
        </div>
      </div>

      {/* Welcome Section */}
      <div className='w-full relative flex flex-col items-center border-t-2 border-highlight md:border-primary md:h-[50vh]'>
        <BgImage source="/welcome-background.jpg"/>
        <div className='h-full w-[70%] flex flex-col justify-center space-y-8 text-center font-medium text-base break-normal my-4 
        md:my-0 md:text-lg lg:text-xl'>
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
      <div className='w-full relative border-t-2 border-primary md:h-[50vh]'>
        <BgImage source="/stock-computer.jpg" className="object-center"/>
        <div className='h-full w-full flex flex-col items-center justify-center my-4 gap-x-8 md:flex-row md:my-0'>
          <h2 className='text-3xl text-primary font-bold text-center mb-2 md:m-0 md:basis-1/6 lg:text-4xl'>Spring 2023<br/>Games</h2>
          <div className='flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row lg:space-x-8'>
              <GameCard name="Flammable Forest" href="https://uvasgd.itch.io/flammable-forest" background="/flammableforest-thumbnail.png"/>
              <GameCard name="Across the Sea of Dust and Rot" href="https://buzjr.itch.io/across-the-sea-of-dust-and-rot" background="/dustandrot-thumbnail.png"/>
              <GameCard name="Dungeon Crab 2: Electric Boogaloo" href="https://jimmyc5.itch.io/dungeon-crab-2" background="/dungeoncrab-thumbnail.png"/>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className='w-full relative border-t-2 flex justify-center border-primary xl:h-[50vh]'>
        <BgImage source="/game-jam.png" className="object-center opacity-60"/>
        <div className='h-full w-full grid grid-cols-1 items-center justify-items-center my-4 gap-y-4 md:grid-cols-2 
        xl:grid-cols-4 xl:gap-x-4 xl:my-0'>
          <FAQCard question='Where and when does SGD meet?' answer='Our next event will be our September pitch night where the semester projects will be introduced. More details soon. '></FAQCard>
          <FAQCard question='Does SGD do anything besides make games?' answer='SGD is primarily a game development club, but we also have social events and host sessions with industry professionals. '></FAQCard>
          <FAQCard question='What kind of software does SGD use?' answer='SGD projects mainly use the Unity game engine and github for source control, but all forms of game making are welcome!'></FAQCard>
          <FAQCard question='Who can I contact for more info?' answer='For any further questions feel free to reach out to uvasgd@gmail.com or contact any officers in the discord server. '></FAQCard>
        </div>
      </div>


        {/* Copyright */}
      <div className='h-[80px] w-full bg-background self-end	border-t-2 border-primary flex items-center justify-center'>
          <p>Copyright © Student Game Developers 2023</p>
      </div>

    </main>
  )
}
