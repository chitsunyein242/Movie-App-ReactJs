import { useSelector } from "react-redux"
import MovieBox from "./MovieBox";


const Movie = () => {

  let movies = [];
  movies = useSelector(state => state.movieData.movies)
  

  return (
     <div style={{
      margin : "100px 10px",
      height : "300px",
     }}>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 justify-self-center'>
            {
              movies.length > 0 ? 
              movies.map((movie) => <MovieBox  key={movie.id} movie ={movie}/>)
              : <h1>Loading.....</h1>
            }
        </div>
    </div>
  )
}

export default Movie
