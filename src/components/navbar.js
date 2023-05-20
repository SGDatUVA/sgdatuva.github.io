import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home}>Home Icon</Link>  
      <div className={styles.main}>
        <Link href="/">About</Link>
        <Link href="/">Games</Link>
        <Link href="/">Calendar</Link>
        <Link href="/">Wiki</Link>
      </div>
    </div>
  )
}