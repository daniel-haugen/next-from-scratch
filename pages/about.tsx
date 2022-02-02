import Navbar from "../components/Navbar"
import Image from 'next/image'


function About() {
  return <>
  <Navbar />
     <div className="flex justify-center align-items-center mt-10">
      About Page
    
     <Image
      src='/../public/thicc.jpg'
      alt='you know what it is'
      width='500'
      height='500'
      className='mt-5'/>
      </div>  
  </>

}

export default About