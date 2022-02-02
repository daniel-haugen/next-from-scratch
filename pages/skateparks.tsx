import Link from "next/link";
import { FC } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const res = await fetch("https://skateparks-wa.herokuapp.com/allskateparksdingdong");
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

let pageCount= 0;

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
      
    
  };
}

  return (
    <>
      <Navbar />
      <div className="flex gap-5 flex-wrap justify-center mt-6">
        
        {renderParks()}

        {/* {data.data.slice(1, 20).map((parks, index) => {
          return (
            <div 
            key={index}
            className={s.card}>
              <h3 id={index}>{parks.name}</h3>
              <p>{parks.native_land}</p>
              <p>Rain cover? {parks.rain_cover.toString()}</p>
              <p>Does it have lights? {parks.night_light.toString()}</p>
              <p>{parks.full_address}</p>
            </div>
          );
        })} */}
      </div>
      <p>you're on page #{page}</p>
      <div className="flex gap-10">
      
      {page > 1 && 
      <button className="bg-midnight text-white" onClick={() => setPage(page - 1)}>
          Go Back
        </button>}
      

        {pageCount == 7 && 
        <button className="bg-midnight text-white" onClick={() => setPage(page + 1)}>
          Next Page
        </button>}

        
      </div>
    </>
  );
}

export default AllSkateparks;
