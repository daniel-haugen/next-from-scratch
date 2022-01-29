import Link from "next/link"


export async function getStaticProps(context) {
  const res = await fetch('https://skateparks-wa.herokuapp.com/skateparks');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  };
}

function AllSkateparks(data) {
  return <> 
  <div>Go Home</div>
  <Link href="/">
  <a>Home</a>
  </Link>

  <div>
        {data.data.map((parks, index) => {
          return (
            <div key={index}>
              <h3 id={index} >{parks.name}</h3>
              <p>{parks.native_land}</p>
              <p>Rain cover? {parks.rain_cover.toString()}</p>
              <p>Does it have lights? {parks.night_light.toString()}</p>
              <p>{parks.full_address}</p>
            </div>
          );
        })}
      </div>




  </>
}

export default AllSkateparks