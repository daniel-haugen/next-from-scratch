import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import { redirect } from "next/dist/server/api-utils";

interface Link {
  href: string;
  label: string;
}

const Navbar: FC = () => (
  <header className={s.header}>
    <Link href="/">
      <a>
        <h1 className={s.h1}>Skate App</h1>
      </a>
    </Link>

    <ul className={s.ul}>
      <li>
        <Link href="/skateparks">
          <a>All Skateparks</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
