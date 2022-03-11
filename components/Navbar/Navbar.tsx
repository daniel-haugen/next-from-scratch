import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";


interface Link {
  href: string;
  label: string;
}

const Navbar: FC = () => {
 // state for mobile side-nav
  const [active, setActive] = useState(false);


  return (
    <>
      <header className="flex h-16 items-center bg-gunmetal font-bold">
        <Link href="/">
          <a>
            <h1 className={s.h1}>SkateWA</h1>
          </a>
        </Link>

        {/* <!-- Desktop Links --> */}
        <ul className={s.desktop}>
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

        {/* <!-- mobile button --> */}
        <div className="md:hidden flex justify-center items-center w-20 ml-auto">
          <button
            onClick={() => setActive(active ? false : true)}
            className="flex flex-col gap-1 h-6"
          >
            <div className={s.menuButton}></div>
            <div className={s.menuButton}></div>
            <div className={s.menuButton}></div>
          </button>
        </div>
      </header>

      {/* <!-- mobile activated menu --> */}
      <ul className={active ? s.mobileActive : s.mobileNotActive}>
        <li className={s.menuItem}>
          <Link href="/skateparks">
            <a>All Skateparks</a>
          </Link>
        </li>
        <li className={s.menuItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>

    </>
  );
};

export default Navbar;
