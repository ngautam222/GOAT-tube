import Image from "next/image"
import { StarIcon } from '@heroicons/react/solid'
import {forwardRef} from "react"
const  Face =forwardRef(({ result },ref)=> {
    console.log(result)
   
    const link = "https://image.tmdb.org/t/p/original";
    return (
      
      <div ref={ref} className =" p-5  group cursor-pointer transition ease-in duration-100  sm:hover:scale-105 hover:z-50">
          <Image layout='responsive'
              src={`${link}${result.backdrop_path || result.poster_path}`||
            `${link}${result.poster_path}`}
      
              height={1080} width={1080} />
          <div className="p-2">
              <p className='truncate'>{result.overview}</p>
              <h3 className="text-2xl group-hover:font-bold">"{result.title}"</h3>
              <p className=" opacity-0 group-hover:opacity-100">
                  "{result.release_date || result.first_air_date}"
                  <StarIcon className="h-4 " />{result.vote_average}
                  
              </p>
         </div>
    </div>
  )
})

export default Face