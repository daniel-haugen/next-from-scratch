import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ExploreGallery from "../components/ExploreGallery";
import Head from 'next/head'

function HomePage() {
  return (
    <>
    <Head>
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/logo.png" />
    </Head>
      <Navbar />
      <Hero />
      <ExploreGallery />
      <Footer />
    </>
  );
}

export default HomePage;