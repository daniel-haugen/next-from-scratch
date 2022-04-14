import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Image from "next/image";
import Footer from "../components/Footer";

function Skatepark({ spInfo }) {
  return (
    <>
      <Navbar />

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
        </div>
      </div>
      <Footer />
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get skateparks
  const res = await fetch("https://skateparks-wa.herokuapp.com/alldem");
  const skateparks = await res.json();

  // Get the paths we want to pre-render based on skateparks
  const paths = skateparks.map((s) => ({
    params: { skatepark: s.slug.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const res = await fetch(
    `https://skateparks-wa.herokuapp.com/alldem/${params.skatepark}`
  );
  const spInfo = await res.json();

  // Pass post data to the page via props
  return { props: { spInfo } };
}

export default Skatepark;
