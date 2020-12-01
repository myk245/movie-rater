import React from 'react'; 

const MovieCard = (props) => {
   return (
      <div className="movie-card">
         {/* when a movie card is clicked, it brings you to the movie's show page with details -- fetch from the api using the movie's id (props.key)*/}
         <h1>{props.movie.title}</h1>
         <img
            src={props.movie.image}
            alt={props.movie.title}
         />
      </div>
   )
}

export default MovieCard; 