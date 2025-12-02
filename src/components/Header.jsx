import { Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router";
import { FaSearch } from 'react-icons/fa';
import {api,api_key} from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movies";

const Header = () => {

  const [name,setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
  e.preventDefault();
  if(name !== "") {
    api.get(`/search/movie?api_key=${api_key}&query=${name}`)
      .then(res => {
        dispatch(fetchMovies(res.data.results));
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
      });
  }
  else{
    api.get(`/discover/movie?sort_by=popularity.desc&api_key=${api_key}`)
    .then(res => {
      dispatch(fetchMovies(res.data.results));
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
    });
  }
}

  return (
    
    <div>
      <Navbar 
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#1A2238",
        padding: "20px 10%",
      }}>
      <Link to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FLIMHUB
          </span>
        </Link>

        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-5">
          <TextInput
          id="small"
          type="text"
          sizing="sm"
          placeholder="Search by Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="p-2 rounded-lg text-white"><FaSearch></FaSearch></button>
        </form>
    </Navbar>
    </div>
  )
}

export default Header
