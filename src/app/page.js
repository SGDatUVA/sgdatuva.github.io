import Image from 'next/image'
import styles from './page.module.css'
import GameCard from '@/components/game-card'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landing}>
        <Image 
          className={styles.hero}
          alt = "Landing Page Hero"
          src="/landing-hero.jpg"
          quality={100}
          fill
          style={{objectFit: "cover"}}
        /> 

        <Image
          className={styles.logo}
          alt="SGD Logo"
          src="/sgd-logo.svg"
          width={360}
          height={200}
          priority
        /> 
      </div>
{/*       

      <div className={styles.welcome}>
        <p>
          Welcome to the homepage of Student Game Developers! We are a student-run organization focused
          on creating original games and expanding knowledge about game design as an art and industry. 
          Check out our Spring 2023 semester games below!
        </p>
      </div>


`     <GameCard name="Flammable Forest" thumbnail="/dungeon-crab-2.png"/>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
