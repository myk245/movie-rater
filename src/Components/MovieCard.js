import React from 'react'; 
import DetailModal from './DetailModal'; 
import '../Styles.css';

class MovieCard extends React.Component {
   state = {
      showDetails: false, 
      movieDetails: []
   }
   /* when "more details" button is pressed, fetch
   from the api using the movie's id*/
   handleButtonClick = () => {
      // console.log(this.props.movie.id)
      fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${this.props.movie.id}`, {
         "method": "GET",
         "headers": {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
            "useQueryString": true
         }
      })
         .then(response => response.json()) 
         // .then(data => console.log(data))
         .then(data => this.setState({
            showDetails: true, 
            movieDetails: data
         }))
         .then(() => console.log(this.state))
   }

   render() {
      return (
         <div className="movie-card">
            <p className="movie-title">{this.props.movie.title}</p>
            <div className="img-container">
               <img
                  className="movie-image"
                  src={this.props.movie.image}
                  alt={this.props.movie.title}
               />
            </div>
            <button className="button" onClick={this.handleButtonClick}>See Details</button>
         </div>
      )
   }
}

export default MovieCard; 