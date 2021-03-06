import React from 'react'; 
import './App.css';
import './Styles.css'; 
import { API_BASE } from './constants';
// import components
import NavBar from './Components/NavBar'; 
import MovieCard from './Components/MovieCard'; 

class App extends React.Component {
  state = {
    searchTerm: "", 
    movieResults: [], 
    moviesInDatabase: []
  }

  componentDidMount = () => {
    fetch(`${API_BASE}/movies`)
      .then(response => response.json())
      .then(data => this.setState({
        moviesInDatabase: data 
      }))
      .then(() => console.log(this.state.moviesInDatabase))
  }

  handleSearchTerm = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  } 

  handleSubmit = () => {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${this.state.searchTerm}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      // data is an object; titles is an array within the object
      // .then(data => console.log(data))
      .then(data => this.setState({
        movieResults: data.titles
      }))
      // .then(() => console.log(this.state.movieResults))

      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
          handleSubmit={this.handleSubmit}
        /> 
        <h1 className="app-header">Movie Rater</h1>
        <div className="movie-container">
          {this.state.movieResults.map(movie =>
            <MovieCard
              key={movie.id}
              movie={movie}
              moviesInDatabase={this.state.moviesInDatabase}
            /> 
          ) 
        }
        </div>
      </div>
    );
  }
}

export default App;
