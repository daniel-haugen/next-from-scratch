import { FC } from "react";
import Link from "next/link";
import s from "./Card.module.css";
import { getStaticProps } from "../../pages/[skatepark]";
import Image from 'next/image'

interface Link {
  href: string;
  label: string;
}

const GalleryCard: FC <{ name: string; image: string; }>  = (props) => (
  <div className="mx-8 mb-6 border-2 rounded border-gray-light">
    <div className="bg-grey h-32 grid items-center relative">
    <Image src='/thicc.jpg' alt='you know what it is' layout="fill"/>

    </div>
    <h3 className="font-bold mt-4 text-lg">{props.name}</h3>
    <p className="mt-2 h-12 truncate overflow-hidden">{props.name} is a party. the og spot Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quod veniam quidem, magni alias repellendus labore quibusdam quae architecto reprehenderit eum dolor qui sit dolorem perferendis doloribus quam eius ab?</p>
  </div>
);

export default GalleryCard;
