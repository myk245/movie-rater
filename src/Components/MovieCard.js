import React from 'react'; 

const MovieCard = (props) => {
   return (
      <div>
         <h1>${props.movie.title}</h1>
      </div>
   )
}

export default MovieCard; 