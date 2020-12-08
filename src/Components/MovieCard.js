import React from 'react'; 
import DetailsModal from './DetailsModal'; 
import '../Styles.css';
import { API_BASE } from '../constants'; 

class MovieCard extends React.Component {
   state = {
      modalOpen: false, 
      movieDetails: [], 
      likes: 0, 
      dislikes: 0
   }

   // right now the page has to be refreshed after first like/dislike
   // otherwise it creates a new record instead of updating the record
   // need some kind of validation 
   componentDidMount = () => {
      // console.log(this.state)
      let movieMatch = this.props.moviesInDatabase.find(movie => movie.movieId === this.props.movie.id)

      // if movieMatch exists and is not undefined, fetch movie info
      if (typeof movieMatch !== "undefined") {
         fetch(`${API_BASE}/movies/${movieMatch.id}`)
            .then(response => response.json())
            .then(data => this.setState({
                  likes: data.likes,
                  dislikes: data.dislikes
               }))
      }   
   }

   componentDidUpdate = (prevProps, prevState) => {
      if (prevProps.movie.id !== this.props.movie.id) {
         let movieMatch = this.props.moviesInDatabase.find(movie => movie.movieId === this.props.movie.id)

         fetch(`${API_BASE}/movies/${movieMatch.id}`)
            .then(response => response.json())
            .then(data => this.setState({
               likes: data.likes,
               dislikes: data.dislikes
            }))
      }
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
            modalOpen: true, 
            movieDetails: data
         }))
         // .then(() => console.log(this.state.movieDetails))
   }

   handleLikeClick = () => {
      let newLikes = this.state.likes + 1

      let movieMatch = this.props.moviesInDatabase.find(movie => movie.movieId === this.props.movie.id)

      // if movieMatch exists and is not undefined, fetch movie info
      if (typeof movieMatch !== "undefined") {
         fetch(`${API_BASE}/movies/${movieMatch.id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
               "Accepts": "application/json"
            },
            body: JSON.stringify({
               likes: newLikes
            })
         })
            .then(response => response.json())
            .then(data => this.setState({
               likes: newLikes
            }))
      } 

      // if movieMatch is undefined, record does not exist in database so create a new record
      if (typeof movieMatch === "undefined") {
         fetch(`${API_BASE}/movies`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify({
               title: this.props.movie.title,
               movieId: this.props.movie.id,
               likes: newLikes,
               dislikes: 0
            })
         })
            .then(response => response.json())
            .then(data => this.setState({
               likes: newLikes
            }))
      }
   }

   handleDislikeClick = () => {
      let newDislikes = this.state.dislikes + 1

      let movieMatch = this.props.moviesInDatabase.find(movie => movie.movieId === this.props.movie.id)

      // if movieMatch exists and is not undefined, fetch movie info
      if (typeof movieMatch !== "undefined") {
         fetch(`${API_BASE}/movies/${movieMatch.id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
            },
            body: JSON.stringify({
               dislikes: newDislikes
            })
         })
            .then(response => response.json())
            .then(data => this.setState({
               dislikes: newDislikes
            }))
      }
      
      if (typeof movieMatch === "undefined") {
         fetch(`${API_BASE}/movies`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify({
               title: this.props.movie.title,
               movieId: this.props.movie.id,
               likes: 0,
               dislikes: newDislikes
            })
         })
            .then(response => response.json())
            .then(data => this.setState({
               dislikes: newDislikes
            }))
      }
   }

   render() {
      return (
         <div className="movie-card">
            <div className="movie-title-div">
               <span className="movie-title">{this.props.movie.title}</span>
            </div>
            <div className="img-container">
               <img
                  className="movie-image"
                  src={this.props.movie.image}
                  alt={this.props.movie.title}
               />
            </div>
            <button className="button" onClick={this.handleButtonClick}>See Details</button>

            <DetailsModal
               show={this.state.modalOpen}
               onHide={() => this.setState({
                  modalOpen: false
               })}
               movieDetails={this.state.movieDetails}
               likes={this.state.likes}
               dislikes={this.state.dislikes}
               likeClick={this.handleLikeClick}
               dislikeClick={this.handleDislikeClick}
            />
         </div>
      )
   }
}

export default MovieCard; 