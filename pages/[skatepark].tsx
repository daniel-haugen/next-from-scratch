import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Image from "next/image";
import Footer from "../components/Footer";

function Skatepark({ spInfo }) {
  return (
    <>

      <Navbar />

      {/* You can see what information is included at this example url:
      https://skateparks-wa.herokuapp.com/alldem/auburn-skatepark */}

      <div className="w-full flex flex-col text-xl bg-charcoal">
        <div id="container" className="bg-white rounded border-2">
          <h1 className="font-bold text-center text-2xl py-4">
            {spInfo.name} Skatepark
          </h1>
          <div className="relative h-80 mx-auto max-w-3xl">
            <Image src="/thicc.jpg" alt="you know what it is" layout="fill" />
          </div>
          <p className="mt-6 mx-4">
            <b>Address:</b> {spInfo.full_address}
          </p>
          <p className="my-6 mx-4">
            <b>Native Land:</b> {spInfo.native_land}
          </p>
          <p className="my-6 mx-4">
            <b>Rain Cover:</b> {spInfo.rain_cover.toString()}
          </p>
          <p className="my-6 mx-4">
            <b>Features:</b> Email us at skateparkWA@gmail.com! Let us know what's at your park
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

// This runs at build time -- it gets the url path to every skatepark in the database
export async function getStaticPaths() {
  // This lists all the skateparks and their path
  const res = await fetch("https://skateparks-wa.herokuapp.com/alldem");
  const skateparks = await res.json();

  // collect the paths
  const paths = skateparks.map((s) => ({
    params: { skatepark: s.slug.toString() },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  // This fetches the information for every skatepark
  // You can see what information is included at this example url:
  // https://skateparks-wa.herokuapp.com/alldem/auburn-skatepark

  const res = await fetch(
    `https://skateparks-wa.herokuapp.com/alldem/${params.skatepark}`
  );
  const spInfo = await res.json();

  // Pass the skatepark data to the page via props
  return { props: { spInfo } };
}

export default Skatepark;
