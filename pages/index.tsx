import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ExploreGallery from "../components/ExploreGallery";
import Head from 'next/head'

function HomePage() {
  return (
    <>
   {/* This is just filling in <head> meta */}
    <Head>
      <title>SkateWA - Find Washington Skateparks</title>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo.png" />
    </Head>

    {/* Content */}
      <Navbar />

      <Hero />

      <ExploreGallery />
      
      <Footer />
    </>
  );
}

export default HomePage;
