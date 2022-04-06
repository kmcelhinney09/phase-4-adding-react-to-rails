import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [allMovies, setAllMovies] = useState([])
  useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then((movies) => setAllMovies(movies))
  }, [])
  
  const movies_list = allMovies.map(movie => <h1 key={movie.id}>{movie.title}</h1>)
  return (
    <div>
        {movies_list}
    </div>
    
    )
}

export default App;
