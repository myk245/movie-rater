import React from 'react'; 
import '../Styles.css'

const MovieCard = (props) => {
   return (
      <div className="movie-card">
         {/* when a movie card is clicked, it brings you to the movie's show page with details -- fetch from the api using the movie's id (props.key)*/}
         <p>{props.movie.title}</p>
         <div className="img-container">
            <img
               className="movie-image"
               src={props.movie.image}
               alt={props.movie.title}
            />
         </div>
         <a className="button">See Details</a>
      </div>
   )
}

export default MovieCard; 