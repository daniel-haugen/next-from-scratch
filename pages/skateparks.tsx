import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export async function getStaticProps(context) {
  const res = await fetch("https://skateparks-wa.herokuapp.com/skateparks");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

function AllSkateparks(data) {
  return (
    <>
    <Navbar />
      <div className='flex gap-5 flex-wrap justify-center mt-6'>

      {data.data.slice(1, 20).map((parks, index) => {
          return (
            <Card key={index} name={parks.name} address={parks.full_address} />    
          );
        })}

        



        {/* {data.data.slice(1, 20).map((parks, index) => {
          return (
            <div 
            key={index}
            className={s.card}>
              <h3 id={index}>{parks.name}</h3>
              <p>{parks.native_land}</p>
              <p>Rain cover? {parks.rain_cover.toString()}</p>
              <p>Does it have lights? {parks.night_light.toString()}</p>
              <p>{parks.full_address}</p>
            </div>
          );
        })} */}


      </div>
    </>
  );
}

export default AllSkateparks;
