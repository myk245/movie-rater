import React from 'react'; 
import './App.css';
// import components
import NavBar from './Components/NavBar'; 
import MovieCard from './Components/MovieCard'; 

class App extends React.Component {
  state = {
    searchTerm: "", 
    movieResults: []
  }

  handleSearchTerm = (event) => {
    console.log(event.target.value)
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
      .then(data => console.log(data.titles))

      .catch(err => {
        console.error(err);
      });
  }

  renderCard = () => {

  }

  render() {
    return (
      <div className="App">
        <NavBar
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
          handleSubmit={this.handleSubmit}
        /> 
        <h1>Movie Rater</h1>
        <div className="movie-container">
          {}
        </div>
      </div>
    );
  }
}

export default App;
