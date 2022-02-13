import Link from "next/link"
import { FC } from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import { useEffect, useState } from "react"
import Pagination from '../components/Pagination'

export async function getStaticProps(context) {
  const res = await fetch("https://skateparks-wa.herokuapp.com/sp-min");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

let pageCount = 0;

function AllSkateparks({ data }) {
  const [allParks, setAllParks] = useState(data);
  const [parksPerPage, setParksPerPage] = useState(7);
  const [page, setPage] = useState(1);

  const renderParks = () => {
    const firstPageIndex = (page - 1) * parksPerPage;
    const lastPageIndex = firstPageIndex + parksPerPage;
    const parksToShow = allParks.slice(firstPageIndex, lastPageIndex);
    pageCount = parksToShow.length;

    if (pageCount > 0) {
      return parksToShow.map((parks, index) => {
        return <Card key={index} name={parks.name} address={parks.address} native_land={parks.native_land} slug={parks.slug} />;
      });
    }
  };

  return (
    <>
      <Navbar />
      <Pagination />
      <div className="flex gap-5 flex-wrap justify-start align-items-center mt-6 ">{renderParks()}</div>
         

        
    </>
  );
}

export default AllSkateparks;
