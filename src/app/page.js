import Navbar from '@/app/components/navbar'
import Image from 'next/image'


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
    </main>
  );
}
