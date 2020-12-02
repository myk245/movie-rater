import React from 'react'; 
import Modal from 'react-bootstrap/Modal'; 
import '../Styles.css';

class MovieCard extends React.Component {
   state = {
      modalOpen: false, 
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
            modalOpen: true, 
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

            <Modal
               show={this.state.modalOpen}
               handleClose={() => this.setState({
                  modalOpen: false
               })}
            >
               <p>Hello!</p>
            </Modal>
            {/* {this.state.showDetails ? <DetailModal /> : null} */}
         </div>
      )
   }
}

export default MovieCard; 