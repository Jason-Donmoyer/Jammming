import React, { Component } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults';
import Playlist from '../../Components/Playlist/Playlist';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
        name: 'Creeping Death',
        artist: 'Metallica',
        album: 'Ride The Lightning',
        id: '1',
        isRemoval: true
        },
        {
        name: 'South of Heaven',
        artist: 'Slayer',
        album: 'South of Heaven',
        id: '2',
        isRemoval: false
        },
        {
        name: 'Symphony of Destruction',
        artist: 'Megadeth',
        album: 'Countdown to Extinction',
        id: '3',
        isRemoval: true
        }
      ]
    }
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} />
      <Playlist />
    </div>
  </div>
</div>
    );
  }
}

export default App;
