import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ background:'#e61717', color:'#FFF', width: '20%', padding: '10px', margin: 'auto', borderRadius: '3px' }}>YouTube Clone</h1>
        <br />
        <SearchBar />
      </div>
    );
  }
}

export default App;
