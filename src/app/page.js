import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import SGDLogo from '@/app/components/sgdlogo'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar/>
      <div className='w-screen relative grow flex justify-center'>
        <Image 
          src="/landing-hero.jpg"
          alt="Landing Hero"
          className="object-cover -z-10"
          quality={100}
          fill
          priority
        />
        <SGDLogo className="w-80 h-80 fill-highlight lg:absolute lg:left-10 lg:bottom-10 "/>
      </div>
    </main>
  )
}
