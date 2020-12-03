import React from 'react'; 
import Modal from 'react-bootstrap/Modal'; 
import '../Styles.css';

const DetailsModal = (props) => {

   return (
      <Modal
         className="modal"
         show={props.show}
         onHide={props.onHide}
      >
         <div className="modal-div">
            <Modal.Header closeButton>
               <Modal.Title>{props.movieDetails.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <p>{props.movieDetails.year}</p>
               <p>{props.movieDetails.length}</p>
               <div className="img-container">
                  <img className="movie-image"
                     src={props.movieDetails.poster}
                     alt={props.movieDetails.title}
                  ></img>
               </div>
               <p>{props.movieDetails.plot}</p>
               <p>IMDB Rating: {props.movieDetails.rating}</p>
            </Modal.Body>

            <Modal.Footer>
               <div>
                  <span className="like-dislike">{props.likes} Likes</span>
                  <span className="like-dislike">{props.dislikes} Dislikes</span>
               </div>
               <div>
                  <button
                     className="button"
                     onClick={props.likeClick}
                  >
                     Like 👍  
                  </button>
                  <button
                     className="button"
                     onClick={props.dislikeClick}
                  >
                     Dislike 👎 
                  </button>
               </div>
            </Modal.Footer>

         </div>
      </Modal>
   )
}

export default DetailsModal; 