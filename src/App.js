import React from 'react'; 
import './App.css';
// import components
import NavBar from './Components/NavBar'; 

class App extends React.Component {
  state = {
    movies: [], 
    searchTerm: ""
  }

  componentDidMount() {
    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${this.state.searchTerm}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.error(err);
      });
  }

  handleSearchTerm = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  } 

  render() {
    return (
      <div className="App">
        <NavBar
          handleChange={this.handleSearchTerm}
        /> 
        <h1>Movie Rater</h1>
      </div>
    );
  }
}

export default App;
