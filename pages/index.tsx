
import Navbar from "../components/Navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from '../components/Hero';
import ExploreGallery from '../components/ExploreGallery';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <ExploreGallery />

      <Footer />
    </>
  );
}

export default HomePage;
