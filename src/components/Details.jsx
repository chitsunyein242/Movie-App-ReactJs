import { useEffect } from 'react'
import { useParams } from 'react-router'
import { api, api_key } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedMovie, selectedMovie } from '../redux/actions/movies'
const Detail = () => {

  const { movieId } = useParams()
  const dispatch = useDispatch()

  const getMovie = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`)
    dispatch(selectedMovie(res.data))
  }

  useEffect(() => {
    
    if(movieId)  getMovie()

    return () => dispatch(removeSelectedMovie({}))
 
  },[movieId])


  let movie = {}
  movie = useSelector(state => state.movieData.movie)

      return (
        <div style={{
          marginTop : '100px',
           width: "100%"
    }}>
      {JSON.stringify(movie) !== '{}' ?
        <div style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} className="h-full">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#1A2238",
              borderRadius: "10px solid black",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2),4px 4px 8px 4px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row"
            }}>
              {/* Image Section */}
              <div style={{
                flex: "1",
                height: "100%",
                overflow: "hidden"
              }}>
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </div>
              
              {/* Content Section */}
              <div style={{
                flex: "1",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
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
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
    : <h1>Loading...</h1>
  }
</div>
  )
}

export default Detail