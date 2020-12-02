import React from 'react'; 
import '../Styles.css'

class MovieCard extends React.Component{

   render() {
      return (
         <div className="movie-card">
            {/* when a movie card is clicked, it brings you to the movie's show page with details -- fetch from the api using the movie's id (props.key)*/}
            <p className="movie-title">{this.props.movie.title}</p>
            <div className="img-container">
               <img
                  className="movie-image"
                  src={this.props.movie.image}
                  alt={this.props.movie.title}
               />
            </div>
            <button className="button">See Details</button>
         </div>
      )
   }
}

export default MovieCard; 