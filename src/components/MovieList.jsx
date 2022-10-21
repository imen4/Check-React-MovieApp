import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,searchTitle,searchRating}) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {movies
          .filter(el=>el.title.toLowerCase().includes(searchTitle.toLowerCase().trim()) &&
          el.rating >= searchRating)
        .map((el)=>(
         <MovieCard movie={el} key={el.id}/>   
        )
        )}
    </div>
  )
}

export default MovieList