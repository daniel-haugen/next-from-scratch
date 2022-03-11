
import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center item-center m-10 text-xl">Welcome to SkateWA!</h1>
   
      <div className="w-ful">
        <h2>Dog Park Bb</h2>
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            // autoWidth: true
          }}
        >
          <SplideSlide className="">
            <h1 className="text-xl ">Park 1</h1>
            <Image 
            src="/thicc.jpg" alt="you know what it is" width="500" height="700" />
          </SplideSlide>
          <SplideSlide>
            <h1>Park 2</h1>
            <Image src="/thicc.jpg" alt="you know what it is" width="500" height="700" />
          </SplideSlide>
          <SplideSlide>
            <h1>Park 3</h1>
            <Image src="/thicc.jpg" alt="you know what it is" width="500" height="700" />
          </SplideSlide>
          <SplideSlide>
            <h1>Park 4</h1>
            <Image src="/thicc.jpg" alt="you know what it is" width="500" height="700" />
          </SplideSlide>
        </Splide>
      </div>

      <br></br>
      <p className="flex justify-center item-center mx-20">
        Alright listen up you lil fucks. This is the place to get all of your skatepark info. Skateparks in Oregon? Nah. this is Skate WA. Not Skate
        Boring-egon. Figure that shit out elsewhere.
      </p>
      <Footer />
    </>
  );
}

export default HomePage;
