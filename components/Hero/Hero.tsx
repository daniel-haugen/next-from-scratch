import { FC } from "react";
import s from "./Hero.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

const Hero: FC = () => {
  // const [active, setActive] = useState(false);

  return (
    <div className="py-10 bg-charcoal flex flex-col items-center justify-center gap-5">
      <h2 className="text-white text-2xl mx-8 ">
        Search For A Park
      </h2>

      <div className="mt-3">
        <input type="text" className="h-8" />
      </div>
    </div>
  );
};

export default Hero;
