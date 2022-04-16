import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export async function getStaticProps(context) {
  
  // This is the initial request at build time to collect all minified skatepark data
  const res = await fetch('https://skateparks-wa.herokuapp.com/sp-min');
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


function AllSkateparks({ data }) {
 // useState Hooks for pagination / how many results per page / etc.
  const [allParks, setAllParks] = useState(data);
  const [parksPerPage, setParksPerPage] = useState(7);
  const [page, setPage] = useState(1);

  let firstPageIndex = (page - 1) * parksPerPage;
  let lastPageIndex = firstPageIndex + parksPerPage;
  let parksToShow = allParks.slice(firstPageIndex, lastPageIndex);
  let parkCount = parksToShow.length;
 
// Rendering all of the parks for the page
  const renderParks = () => {
    return parksToShow.map((parks, index) => {
        return (
          <Card
            key={index}
            name={parks.name}
            address={parks.address}
            native_land={parks.native_land}
            slug={parks.slug}
          />
        );
      });
  };

  return (
    <>
      <Navbar />

        <Pagination page={page} setPage={setPage} parkCount={parkCount} parksPerPage={parksPerPage} />
      
      <div className="flex gap-5 flex-wrap justify-start align-items-center bg-charcoal">
        {renderParks()}
      </div>

      {/* Pagination Controls */}
      <Pagination page={page} setPage={setPage} parkCount={parkCount} parksPerPage={parksPerPage} />
      
      
      <Footer />
    </>
  );
}

export default AllSkateparks;
