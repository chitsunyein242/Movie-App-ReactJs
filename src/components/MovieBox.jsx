/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Card } from "flowbite-react"

function MovieBox({ movie }) {
  return (
    <div className="max-w-sm">
             <Link to={`/movies/${movie.id}`}>
                 <Card
                 style={{
                  width : "100%",
                  backgroundColor : "#1A2238"
                 }}
                   className="max-w-sm"
                   imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                 >
                  <div style={{
                    height: "200px",
                  }}>
                    <div>
                     <div className="flex justify-between mb-5">
                      <h5 className="text-2xl font-bold text-white">
                     {movie.original_title}
                   </h5>
                    <div className="mt-3">
                      <span className="inline rounded-xl mt-4 p-2 bg-orange-500 text-white">
                      {(parseInt(movie.popularity) / 100).toFixed(1)}
                    </span>
                    </div>
                     </div>
                   <p className="font-normal text-white">
                     {
                      movie.overview.length > 100 ? movie.overview.substring(0,100) + "..." : movie.overview
                     }
                   </p>
                  </div>
                  </div>
               </Card>
             </Link>
    </div>
  )
}

export default MovieBox
