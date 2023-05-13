import Image from 'next/image'
import styles from './game-card.module.css'

export default function GameCard({name, thumbnail}) {
  const altText = thumbnail + " thumbnail";

  return (
    <div className={styles.container}>
        <Image 
            className={styles.thumbnail}
            alt = {altText}
            src={thumbnail}
            quality={100}
            fill
          />  

      <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
      >

        <h2>
          {name} <span>-&gt;</span>
        </h2>
      </a>
    </div>
  )
}
