import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import Details from "./components/Details"
import NotFound from "./components/NotFound"


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Home/>} />
        <Route path="/movies/:movieId" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />        
      </Routes>

    </>
  )
}

export default App
