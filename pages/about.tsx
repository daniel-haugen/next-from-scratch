import Navbar from "../components/Navbar"
import Image from 'next/image'


function About() {
  return <>
  <Navbar />
     <div className="flex flex-col mt-10 justify-center w-full items-center">
      <b className="mb-10 text-xl">About Page</b>
    
     <Image
      src='/thicc.jpg'
      alt='you know what it is'
      width='500'
      height='700'/>
      </div>  
  </>

}

export default About