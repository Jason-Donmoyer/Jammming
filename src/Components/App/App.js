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
        isRemoval: true
        },
        {
        name: 'Symphony of Destruction',
        artist: 'Megadeth',
        album: 'Countdown to Extinction',
        id: '3',
        isRemoval: true
        }
      ],
      PlaylistName: 'My Play List',
      PlaylistTracks: [
        {
          name: 'Riders on the Storm',
          artist: 'The Doors',
          album: 'Riders on the Storm',
          id: '1',
          isRemoval: false
          },
          {
          name: 'Angel of Death',
          artist: 'Slayer',
          album: 'South of Heaven',
          id: '2',
          isRemoval: false
          },
          {
          name: 'Holy Wars',
          artist: 'Megadeth',
          album: 'Rust in Peace',
          id: '3',
          isRemoval: false
          }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    this.state.PlaylistTracks.forEach(playlistTrack => {
      if (playlistTrack.id !== track.id) {
        this.setState({
          PlaylistTracks: this.state.PlaylistTracks.concat(track)
        });
      }
    }); 
  }
  removeTrack(track) {
    this.setState({
      PlaylistTracks: this.state.PlaylistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }
  updatePlaylistName(name) {
    this.setState({
      PlaylistName: name
    });
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack} />
      <Playlist  playlistName={this.state.PlaylistName} playlistTracks={this.state.PlaylistTracks} onRemove={this.removeTrack} onNameChange={this.state.updatePlaylistName} />
    </div>
  </div>
</div>
    );
  }
}

export default App;
