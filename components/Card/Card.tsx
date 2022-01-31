import { FC } from "react";
import Link from "next/link";
import s from "./Card.module.css";
import { getStaticProps } from "../../pages/[skatepark]";

interface Link {
  href: string;
  label: string;
}

const Card: FC<{ name: string; address: string }> = (props) => (
  <div className={s.cardCtr}>
    <h3 className={s.skateparkName}>{props.name}</h3>
    <div className={s.image}>Image</div>
    <div>
      <p>{props.address}</p>
    </div>
  </div>
);

export default Card;
