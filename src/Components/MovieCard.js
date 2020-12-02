import React from 'react'; 
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
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
         .then(() => console.log(this.state.movieDetails))
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

            <Modal
               className="modal"
               show={this.state.modalOpen}
               onHide={() => this.setState({
                  modalOpen: false
               })}
            >
               <div className="modal-div">
                  <Modal.Header closeButton>
                     <Modal.Title>{this.state.movieDetails.title}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                     <p>{this.state.movieDetails.year}</p>
                     <p>{this.state.movieDetails.length}</p>
                     <div className="img-container">
                        <img className="movie-image" src={this.state.movieDetails.poster}></img>
                     </div>
                     <p>{this.state.movieDetails.plot}</p>
                     <p>IMDB Rating: {this.state.movieDetails.rating}</p>
                  </Modal.Body>

                  <Modal.Footer>
                     <button className="button">Like</button>
                     <button className="button">Dislike</button>
                  </Modal.Footer>

               </div>
            </Modal>
         </div>
      )
   }
}

export default MovieCard; 