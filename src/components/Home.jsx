import { useEffect } from "react";
import { api, api_key } from "../api";
import Movie from "./Movie"
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movies";

const Home = () => {

  const dispatch = useDispatch();

  const getMovies =async  () =>{
    const res = await api.get(`/discover/movie?sort_by=popularity.desc&api_key=${api_key}`)
    dispatch(fetchMovies(res.data.results))
     
  }


  useEffect(() =>{
    getMovies();    
  
  },[])

  return (
    <div>
      <Movie/>
    </div>
  )
}

export default Home
