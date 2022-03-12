import { FC } from "react";
import Link from "next/link";
import s from "./Pagination.module.css";

const Pagination: FC<{
  page: number;
  setPage: Function;
  parkCount: number;
  parksPerPage: number;
}> = (props) => (

  <div className={s.ctr}>
    {props.page === 1 ? (<div className=""></div>) : (
      <button className={s.button} onClick={() => props.setPage(props.page - 1)}>Back</button>
    )}

    {props.parkCount !== props.parksPerPage ? null : 
      <button className={s.button} onClick={() => props.setPage(props.page + 1)}>Next</button>
    }


  </div>
);

export default Pagination;
