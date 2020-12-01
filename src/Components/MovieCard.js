import React from 'react'; 

const MovieCard = (props) => {
   return (
      <div className="movie-card">
         <h1>{props.movie.title}</h1>
         <img
            src={props.movie.image}
            alt={props.movie.title}
         />
      </div>
   )
}

export default MovieCard; 