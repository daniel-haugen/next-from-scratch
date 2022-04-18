import Navbar from "../components/Navbar"
import thicc from '../public/thicc.png'
// import Image from 'next/image'


function About() {
  return <>
  <Navbar />
     <div className="flex flex-col justify-center w-full items-center">
      <h2 className="my-10 text-xl font-bold text-white">About Page</h2>
    
    <div className="">
      <img
            src='/images/thicc.png'
            alt='you know what it is'
            width='500'
            height='700'/>

    </div>
     

      
      </div>  
  </>

}

export default About