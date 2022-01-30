import Link from "next/link"
import Navbar from "../components/Navbar/Navbar"


function HomePage() {
  return <>

  <Navbar />
  <div>Welcome to the Skate App</div>
  <Link href="/skateparks">
  <a>all skateparks</a>
  </Link>
  <br></br>
  <br></br>
  <br></br>
  <Link href="/100">
  <a>Benefit Skatedot</a>
  </Link>


  </>
}

export default HomePage