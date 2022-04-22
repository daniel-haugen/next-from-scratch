import { FC } from "react";
import Link from "next/link";



interface Link {
  href: string;
  label: string;
}

const GalleryCard: FC<{ name: string; image: string; slug: string }> = (props) => (
  <Link href={'/' + props.slug}>
  <a>
  <div className="mx-8 mb-6 border-2 rounded border-gray-light bg-white">
    <div className="bg-grey h-40 md:h-64 grid place-items-center border">
      <img 
      src="/images/no-image-2.png" 
      alt="you know what it is" 
      className="border w-32" />
    

    </div>
    <h3 className="font-bold mt-4 text-lg text-center h-8">{props.name}</h3>
  </div>


  </a>
  
  </Link>
);

export default GalleryCard;
