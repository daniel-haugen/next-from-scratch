import { FC } from "react";
import Link from "next/link";
import s from "./Pagination.module.css";

interface Link {
  href: string;
  label: string;
}

const Pagination: FC = () => (
  <div className='flex gap-10'>
    <button className="bg-midnight text-white">Go Back</button>
    <button className="bg-midnight text-white">Next Page</button>
  </div>
);

export default Pagination;
