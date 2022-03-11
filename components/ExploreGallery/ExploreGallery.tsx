import { FC } from "react";
import Link from "next/link";
import s from "./Navbar.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

interface Link {
  href: string;
  label: string;
}

const ExploreGallery: FC = () => {
  return (
    <div className="bg-white rounded mx-6 mt-10">
      <h3 className="ml-5 pt-5 mb-10 text-lg font-bold underline">
        Dog-Friendly Parks
      </h3>

      <div className="flex flex-col py-5">
        <div className="bg-grey w-1/2 mb-4 h-32 mx-auto"></div>
        <h3 className="mx-auto font-bold">Judkins Skatepark</h3>
        <p className="ml-5">This is a description of the park ya know.</p>
      </div>

      <div className="flex flex-col py-5">
        <div className="bg-grey w-1/2 mb-4 h-32 mx-auto"></div>
        <h3 className="mx-auto font-bold">Judkins Skatepark</h3>
        <p className="ml-5">This is a description of the park ya know.</p>
      </div>
    </div>
  );
};

export default ExploreGallery;
