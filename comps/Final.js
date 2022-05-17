import Face from "./Face";
import { useSpring, animated, config } from "react-spring";
function Final({ results }) {

    return (
        <useSpring className="px-4 my-5 sm:grid md:grid-cols-2 ll:flex lg:grid-cols-3">
        {results.map(res => (
            <Face key={res.id} result={res}/>
        ))}
  </useSpring>
  )
}

export default Final;