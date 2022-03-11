import Navbar from "../components/Navbar"
import Image from 'next/image'


function About() {
  return <>
  <Navbar />
     <div className="flex flex-col justify-center w-full items-center">
      <h2 className="my-10 text-xl font-bold text-white">About Page</h2>
    
     <Image
      src='/thicc.jpg'
      alt='you know what it is'
      width='500'
      height='700'/>

      
      </div>  
  </>

}

export default About