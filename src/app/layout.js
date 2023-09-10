import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SGD at UVA',
  description: 'Wbesite for Student Game Developers at UVA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-primary border-primary`}>{children}</body>
    </html>
  )
}
