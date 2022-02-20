import { FC } from "react";
import Link from "next/link";
import s from "./Pagination.module.css";

const Pagination: FC<{
  page: number;
  setPage: Function;
  parkCount: number;
  parksPerPage: number;
}> = (props) => (

  <div className="bg-silver w-1/4 my-10 flex justify-between">
    {props.page === 1 ? (<div className=""></div>) : (
      <button className="bg-midnight text-white" onClick={() => props.setPage(props.page - 1)}>Go Back</button>
    )}

    {props.parkCount !== props.parksPerPage ? null : 
      <button className="bg-midnight text-white" onClick={() => props.setPage(props.page + 1)}>Next Page</button>
    }


  </div>
);

export default Pagination;
