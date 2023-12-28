// From https://github.com/CodeWithMarish/responsive-navbar

import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </p>
    </Link>
  );
};

export default NavItem;
