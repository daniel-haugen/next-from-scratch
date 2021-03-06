import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import GalleryCard from "../components/GalleryCard";

function Skatepark({ spInfo }) {
  // This shows all data available for the park - uncomment to work
  // console.log(spInfo);

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
          <div className="h-80 border mx-auto max-w-3xl grid place-items-center">
            <img
              src='/images/no-image-2.png'
              alt="you know what it is"
              className="w-72 border"
            />
          </div>
          <div id="skatepark-info">
            <p className="border-b text-center py-5">
              email images to skatewa.info@gmail.com
            </p>
            <p className="mt-6 mx-4">
              <b>Address:</b> {spInfo.full_address}
            </p>
            <p className="my-6 mx-4">
              <b>Native Land:</b> {spInfo.native_land}
            </p>
            <p className="my-6 mx-4">
              <b>Rain Cover:</b> {spInfo.rain_cover.toString() == true ? 'protected from rain': 'nope'}
            </p>
            <p className="my-6 mx-4">
              <b>Features:</b> soon....
            </p>
          </div>

          <div id="nearbyParks" className="bg-charcoal mt-16">
            <h4 className="bg-white underline pl-3 py-8 text-2xl font-bold border-t border-b">Nearby Parks</h4>

            <Splide
            className="mt-4"
           
            options={{
              autoplay: true,
              arrows: false,
              pagination: false,
              padding: '20%'
            }}
          >
             <SplideSlide>
              <GalleryCard name="Judkins" image="test2" slug="judkins-skatepark" />
            </SplideSlide>
            
            <SplideSlide>
              <GalleryCard name="Sammamish" image="test2" slug="sammamish-skatepark"/>
            </SplideSlide>
          </Splide>
          </div>

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
