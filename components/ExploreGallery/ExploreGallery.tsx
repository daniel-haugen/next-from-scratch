import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";
import GalleryCard from '../GalleryCard';

interface Link {
  href: string;
  label: string;
}

const ExploreGallery: FC = () => {
  return (
    <>
    <div className="bg-white rounded mx-6 mt-10 flex flex-col pb-5">
      <h3 className="ml-10 pt-6 pb-3 text-2xl w-1/2 font-bold">
        Dog-Friendly Skateparks
      </h3>

      <div id="grid-container" className="py-5 mt-3 h-80 overflow-auto">
        <GalleryCard name="Judkins" image="test2"/>
        <GalleryCard name="Jefferson" image="test2"/>
        <GalleryCard name="Seask8" image="test2"/>
        <GalleryCard name="Marginal Way" image="test2"/>
      </div>

    </div>
    
    
    <div className="bg-white rounded mx-6 mt-10 flex flex-col">
      <h3 className="ml-10 pt-6 pb-3 text-2xl w-1/2 font-bold">
        Cool Kid Skateparks
      </h3>

      <div id="grid-container" className="py-5 mt-3 h-80 overflow-auto">
        <GalleryCard name="Judkins" image="test2"/>
        <GalleryCard name="Jefferson" image="test2"/>
        <GalleryCard name="Seask8" image="test2"/>
        <GalleryCard name="Marginal Way" image="test2"/>
      </div>

    </div>
    
    </>
  );
};

export default ExploreGallery;
