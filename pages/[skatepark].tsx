import Link from "next/link"
import Navbar from "../components/Navbar"
import Card from "../components/Card"

function Skatepark({ spInfo }) {
  return <>
  <Navbar />
  <Card name={spInfo.name} address={spInfo.street_address} native_land={spInfo.native_land} slug={spInfo.slug} />
  </>  
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get skateparks
  const res = await fetch('https://skateparks-wa.herokuapp.com/skateparks')
  const skateparks = await res.json()

  // Get the paths we want to pre-render based on skateparks
  const paths = skateparks.map((s) => ({
    params: { skatepark: s.slug.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const res = await fetch(`https://skateparks-wa.herokuapp.com/skateparks/${params.skatepark}`);
  const spInfo = await res.json()

  // Pass post data to the page via props
  return { props: { spInfo } }
}


export default Skatepark