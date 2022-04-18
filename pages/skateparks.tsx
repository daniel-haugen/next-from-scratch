import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function AllSkateparks({ data }) {
  // useState Hooks for pagination / how many results per page / etc.
  const [allParks, setAllParks] = useState(data);
  const [parksPerPage, setParksPerPage] = useState(16);

  let parkCount = allParks.length;
  let iterations = Math.ceil(parkCount / parksPerPage);

  const renderParks = () => {
    return allParks.map((park, index) => {
      return (
        <Link href={"/" + park.slug} key={index}>
          <a>
            <div className="border hover:bg-green bg-white h-24 flex items-center rounded">
              <div className="flex flex-col pl-3">
              <h3 className="font-bold md:text-xl">{park.name}</h3>
              <p className="md:block text-xs">{park.address}</p>
              </div>
            </div>
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2" id="allList">
        {renderParks()}
      </div>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // This is the initial request at build time to collect all minified skatepark data
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

export default AllSkateparks;
