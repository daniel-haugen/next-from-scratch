import { FC } from "react";
import s from "./Hero.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

const Hero: FC = () => {
  // const [active, setActive] = useState(false);

  return (
    <div className="py-8 bg-charcoal flex flex-col items-center justify-center gap-5">
      <h2 className="text-white text-xl font-bold mx-8 ">
        Search For...
      </h2>
      <div className="mt-4 flex gap-10">
        <button className={s.button}>Park</button>
        <button className={s.button}>Features</button>
      </div>

      <div className="mt-3">
        <input type="text" className={s.search} />
        <button className={s.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
