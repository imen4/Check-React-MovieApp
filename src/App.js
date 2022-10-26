import "./App.css";
import { useState } from "react";
import { movieData } from "./MovieData";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [searchRating, setSearchRating] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <>
               <SearchBar
              setSearchRating={setSearchRating}
              setSearchTitle={setSearchTitle}
              addMovie={addMovie}/>
              <MovieList
              movies={movies}
              searchRating={searchRating}
              searchTitle={searchTitle}/> 
            </>
          )}
        />
        <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
