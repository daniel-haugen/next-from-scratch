import Link from "next/link"
import Navbar from "../components/Navbar"
import Card from "../components/Card"

function Skatepark({ spInfo }) {
  return <>
  <Navbar />

  <div className='w-full flex flex-col mt-10 text-xl '>
  <h1 className="font-bold">{spInfo.name}</h1>
  <p className="mt-5">Image Here</p>
  <p className="mt-3"><b>Address:</b> {spInfo.full_address}</p>
  <p className="mt-3"><b>Native Land:</b> {spInfo.native_land}</p>

  </div>
  </>
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get skateparks
  const res = await fetch('https://skateparks-wa.herokuapp.com/alldem')
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

  const res = await fetch(`https://skateparks-wa.herokuapp.com/alldem/${params.skatepark}`);
  const spInfo = await res.json()

  // Pass post data to the page via props
  return { props: { spInfo } }
}


export default Skatepark