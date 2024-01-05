// From https://github.com/CodeWithMarish/responsive-navbar

import Link from "next/link";
import Image from "next/image"

const NavItem = ({ text, href, icon, active }) => {
  return (
    <Link href={href}>
      <div className="flex items-center space-x-4">
        <div className="md:hidden relative h-6 aspect-square">
          <Image
                  className=""
                  src={icon}
                  fill
                  alt=""
          />
        </div>
        <p
          className={`nav__item 
          hover:text-primary hover:underline hover:underline-offset-2	 ${
            active ? "active" : ""
          }`}
        >
          {text}
        </p>
      </div>

    </Link>
  );
};

export default NavItem;
