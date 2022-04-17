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
    return allParks.map((park) => {
      return (
        <Link href={"/" + park.slug}>
          <a>
            <div className="border bg-white h-16 flex items-center">
              <h3 className="pl-5 font-bold">{park.name}</h3>
            </div>
          </a>
        </Link>
      );
    });
  };

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 w-full" id="allList">
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
