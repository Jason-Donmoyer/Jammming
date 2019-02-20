import React from 'react';
import './SearchResults.css';
import TrackList from '../../Components/TrackList/TrackList';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
  <             h2>Results</h2>
                <TrackList />
            </div>
        )
    };
}

export default SearchResults;