import React, { Component } from 'react';
import axios from 'axios';
import './SearchBar.css';

import ResultsList from '../ResultsList/ResultsList.js';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state= {
      searchVal: '',
      results: []
    }
    this.handleSearch= this.handleSearch.bind(this);
    this.submitSearch= this.submitSearch.bind(this);
  }

  handleSearch(input){
    this.setState({ searchVal: input });
  }

  submitSearch(){
    axios.get(`http://localhost:3001/api/search/:${this.state.searchVal}`)
      .then(results=> {
        this.setState({ results: results.data.items, searchVal: '' })
      });
  }

  render(){
    return(
      <div className='topbar-container'>
        <div className='searchbar-container'>
          <input onChange={(event)=> this.handleSearch(event.target.value) } type='text' placeholder='Search'></input>
          <button onClick={()=> this.submitSearch()}>SEARCH</button>
        </div>
        <br />
        <ResultsList results={this.state.results}/>
      </div>
    )
  }
}
