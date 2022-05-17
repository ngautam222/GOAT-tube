import Head from 'next/head'
import Image from 'next/image'
import Header from '../comps/Header'
import Navbar from '../comps/Navbar'
import Final from '../comps/Final'
import reqs from '../utilities/reqs'


export default function Home({results}) {
 // console.log(props);
  
 
  return (
    <div>
      <Head>
        
        <title>GOAT Tube</title>
      </Head>
      

      <Header />
      <Navbar />
      <Final results={results}/>
    </div>
    
  )
}
//serverside render

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`http://api.themoviedb.org/3${reqs[genre]?.url || reqs.fetchTrend.url
}`).then((x)=>x.json());

  return {
    props: {
      results: request.results,
    }
  }
  }


 