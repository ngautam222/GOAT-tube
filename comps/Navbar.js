import reqs from "../utilities/reqs"
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();
  return (
      
      <nav>
          <div className="flex sm:px-20  space-x-6 px-12 flex-grow text-xl overflow-x-scroll scrollbar-hide">
              {Object.entries(reqs).map(([key, { title, url }]) => (
                  <h1 key={key}
                  onClick={()=>router.push(`/?genre=${key}`)}
                className="cursor-pointer tranisition duration-75
                  transform hover:scale-150 hover:text-yellow-500 last:pr-10"
                      
                  >{title}</h1>))}
          </div>


          </nav>
          
    
  )
}

export default Navbar