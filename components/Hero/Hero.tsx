import { FC } from "react";
import s from "./Hero.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

const Hero: FC = () => {
  // const [active, setActive] = useState(false);

  return (
    <div className="py-8 bg-charcoal flex flex-col items-center justify-center gap-5">
      <h2 className="text-white text-lg font-bold">
        Search Through Parks or Obstacles
      </h2>
      <div className="flex gap-10">
        <button className={s.button}>Parks</button>
        <button className={s.button}>Obstacles</button>
      </div>

      <div>
        <input type="text" className={s.search} />
        <button className={s.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
