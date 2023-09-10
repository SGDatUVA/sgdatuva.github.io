'use client'

import Link from "next/link"
import { useState  } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const aboutPath = "/about"
  const itchLink = "https://uvasgd.itch.io/";
  const calendarPath = "/"
  const wikiLink = "https://uvasgd.github.io/sgd-docs/README.html";


  return (
    <nav className="relative w-full h-20 flex items-center justify-between px-4 text-primary bg-background border-b-2	border-current">
      <Link href="/">
        <SGDLogoText className="fill-primary w-10"/>
      </Link>
      {/* Mobile Display */}
      
      <Hamburger className="md:hidden" onClick={() => setNavOpen((prev) => !prev)}/>
      <div className={ `${(navOpen) ? "" : "hidden "} block absolute w-full h-screen top-0 left-0 bg-background z-10`}>
        <ul className="flex flex-col items-center font-bold text-4xl space-y-8 pt-8">
          <CloseSVG onClick={() => setNavOpen((prev) => !prev)} />
          <Link className="hover:text-highlight" href={aboutPath}>About</Link>
          <Link className="hover:text-highlight" href={itchLink}>Games</Link>
          <Link className="hover:text-highlight" href={calendarPath}>Calendar</Link>
          <Link className="hover:text-highlight" href={wikiLink}>Wiki</Link>
          <Link className="hover:text-highlight w-10" href="/">
            <DiscordLogo className="fill-primary"/>
          </Link>
        </ul>
      </div>

      {/* Desktop Display */}
      <ul className="hidden md:flex items-center font-bold text-2xl space-x-4">
        <Link className="hover:text-highlight" href={aboutPath} >About</Link>
        <Link className="hover:text-highlight" href={itchLink}>Games</Link>
        <Link className="hover:text-highlight" href={calendarPath}>Calendar</Link>
        <Link className="hover:text-highlight" href={wikiLink}>Wiki</Link>
        <Link className="hover:text-highlight w-10" href="/">
          <DiscordLogo className="fill-primary"/>
        </Link>
      </ul>

    </nav>
  )
}

function SGDLogoText(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 150 150"
      {...props}
    >
      <path
        d="M27.598 26.275H237.01v218.824H27.598z"
        style={{
          fill: "none",
        }}
        transform="matrix(.7163 0 0 .68548 -19.768 -18.01)"
      />
      <path
        d="M154.06 67v-2.62l10.82-1.17V66c0 5.4 2.75 8.69 7.2 8.69s7.21-2.76 7.21-7.1c0-4.67-1.9-8.06-10.28-16-11.13-10.53-14.31-16.26-14.31-24.42 0-11 6.36-18.23 17.07-18.23s17.06 7.21 17.06 18.34v1.9L178 30.35v-2.12c0-5.72-2.23-8.69-6.15-8.69-3.92 0-6.15 2.44-6.15 7.1s2.34 8.06 10.29 16c10.83 10.82 14.33 16.23 14.33 24.36 0 10.6-7.42 18.23-18.13 18.23-10.71 0-18.13-7.6-18.13-18.23Zm69.65-33.89v-6.26c0-4.66-2.65-7.31-6.79-7.31-4.14 0-6.78 2.65-6.78 7.31v40.5c0 4.66 2.65 7.31 6.78 7.31 4.13 0 6.79-2.65 6.79-7.31V54.2h-6.79V43.6h18v23.75c0 10.7-7.21 17.91-18 17.91s-18-7.21-18-17.91v-40.5c0-10.7 7.21-17.91 18-17.91s18 7.21 18 17.91v6.26h-11.21ZM245.86 10h17.59c10.71 0 17.6 7 17.6 17.7v38.8c0 10.7-6.89 17.7-17.6 17.7h-17.59V10Zm17.07 63.6c4.34 0 6.88-2.54 6.88-6.89V27.49c0-4.35-2.54-6.89-6.88-6.89h-5.84v53h5.84Zm-108.47 31.08c0-9.36 3.95-15.9 12.06-15.9 6.68 0 10.49 3.64 10.49 10.28 0 5-1.47 11.08-6.23 11.08-1.92 0-2.9-.91-3.18-2.35a3.893 3.893 0 0 1-3.49 2.35c-2.52 0-3.6-1.58-3.6-4 .005-.334.029-.668.07-1l.45-4.61c.32-3.22 1.85-4.61 4-4.61a3.391 3.391 0 0 1 3.18 1.74l.14-1.4h3.39l-1 9.44c-.013.14-.013.28 0 .42 0 .56.25.91.88.91 1.82 0 2.58-4.65 2.58-8 0-4.55-2.79-7.24-7.48-7.24-6.57 0-8.87 5.59-8.87 13.28 0 5.74 3.32 8.78 9 8.78a9.897 9.897 0 0 0 6.3-2.07l-.28 3.36a11.008 11.008 0 0 1-6.09 1.64c-7.78-.04-12.32-4.34-12.32-12.1Zm13-.21.31-3.07v-.25c0-1.43-.59-2.34-1.78-2.34s-1.57 1-1.68 2.1l-.42 4.09a2.864 2.864 0 0 0 0 .49c0 1 .42 1.68 1.5 1.68s1.9-.74 2.11-2.7h-.04Zm12.9 4.79V90.18h3.71v19.08a2.09 2.09 0 0 0 2.06 2.273 2.09 2.09 0 0 0 2.06-2.273V90.18h3.64v19.08c.006.106.009.211.009.317 0 2.979-2.451 5.43-5.43 5.43-.093 0-.186-.002-.279-.007a5.888 5.888 0 0 1-.297.008c-3.006 0-5.48-2.474-5.48-5.48 0-.089.003-.179.007-.268Zm27.26-19.08-4.05 24.47h-5l-4.06-24.47h3.78l2.79 19.22 2.8-19.22h3.74Zm9.38 19.05h-4l-.8 5.42h-3.71l4.06-24.47h5l4.06 24.47h-3.78l-.83-5.42Zm-.49-3.57L215 95.42l-1.51 10.24h3.02Z"
        style={{
          fillRule: "nonzero",
        }}
        transform="translate(-142.555 12.138)"
      />
    </svg>
  )
}

function DiscordLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" {...props}>
        <path
          d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"
          data-name="Discord Logo - Large - White"
        />
    </svg>
  )
}

// From: https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js:393-782
function Hamburger(props) {
  return(
    <div className={"space-y-2 " + props.className} onClick={props.onClick} >
      <span className="block h-0.5 w-8 bg-primary rounded-lg"></span>
      <span className="block h-0.5 w-8 bg-primary rounded-lg"></span>
      <span className="block h-0.5 w-8 bg-primary rounded-lg"></span>
    </div>
  )
}

// From: https://codesandbox.io/s/tailwind-react-hamburger-menu-tjhfyx?file=/src/components/Header/Header.js:393-782
function CloseSVG(props) {
  return (
    <svg onClick={props.onClick}
      className="h-8 w-8 text-bg-primary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
  )
}
