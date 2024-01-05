import FAQ from  '@/app/components/faq';
import Gamecard from '@/app/components/gamecard';
import Navbar from '@/app/components/navbar';
import SectionHeader from '@/app/components/section-header';
import Image from 'next/image';
import Link from 'next/link'

export default function Page() {
  return (
    <main className='text-center'>
      <Navbar currentPage="About Us"/>

      {/* Hero */}
      <div className="h-64 relative flex justify-center">
        <div className="absolute inset-0 -z-10 h-full blur-sm brightness-50	">
            <Image
              src="/welcome-background.jpg"
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
            SGD games are developed in teams led by directors. All projects are developed over the course of a semester. At the beginning of every semester, we have a "&quot; pitch night"&quot; where directors will showcase their ideas to the club.           
          </div>
          <div> 
            Afterwards, all members will rank the projects and be assigned to one of the teams. Project interest is our main criteria for assigning members, but we also try to make sure the teams are balanced in terms of development experience and skill set. Basically, we want to avoid Project X having every new member of the club or Project Y having all the musicians of the club.
          </div>
          <div> 
            See the current semester projects and directors below!
          </div>
        </div>
      </div>


      {/* Current Sem Projects */}
      <SectionHeader text="Spring 2024 Projects"/>
      <h2>TBD at January pitch night</h2>

      {/* Current Sem Projects */}
      <SectionHeader text="Officers"/>
      <p>
        President: Spencer Portuese <br/>
        Vice President: Joey Giordano <br/>
        Head of Directors: Nate Pawlas <br/>
        Treasurer: Eric Li <br/>
        Internal relations: Catherine Xu <br/>
        External relations: Zach Hay <br/>
        Webmaster: Griffin Chozick <br/>
      </p>
    </main>
  );
}
