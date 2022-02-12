import { FC } from "react";
import Link from "next/link";
import s from "./Footer.module.css";


interface Link {
  href: string;
  label: string;
}

const Footer: FC = () => (
  <footer className={s.header}>
    <Link href="/">
      <a>
        <h1 className={s.h1}>
        Footer
        </h1>
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
  </footer>
);

export default Footer;
