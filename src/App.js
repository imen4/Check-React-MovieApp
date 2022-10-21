import './App.css';
import { useState } from 'react';
import { movieData } from './MovieData';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
  const [movies,setMovies]=useState(movieData);
  const [searchRating,setSearchRating] = useState(0)
  const [searchTitle,setSearchTitle]= useState("")
  const addMovie =(newMovie)=>{
    console.log(newMovie)
     setMovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <SearchBar setSearchRating={setSearchRating} setSearchTitle={setSearchTitle} addMovie={addMovie}/>
      <MovieList movies={movies} searchRating={searchRating} searchTitle={searchTitle}/>
    </div>
  );
}

export default App;
