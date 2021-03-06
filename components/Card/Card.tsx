import { FC } from "react";
import Link from "next/link";
import s from "./Card.module.css";
import Image from 'next/image';

interface Link {
  href: string;
  label: string;
}

const Card: FC<{ name: string; address: string; native_land: string; slug: string }> = (props) => (
  <div className={s.cardCtr}>
    <Link href={'/' + props.slug}>
      <a>
        <h3 className={s.skateparkName}>{props.name}</h3>
      </a>
    </Link>

    <div className={s.image}>

    <Image src='/thicc.jpg' alt='you know what it is' layout="fill"/>

    </div>
    <div className={s.address}>
      <p>{props.address}</p>
    </div>
  </div>
);

export default Card;
