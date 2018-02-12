import React from 'react';
import './ResultsList.css';


const ResultsList= (props)=> {
    const videos= props.results.map((video, i)=> {
      return(
        <div key={i}>
          <img src={video.snippet.thumbnails.high.url} />
          <h1>{video.snippet.title}</h1>
          <p>{video.snippet.description}</p>
        </div>
      )
    });

    return(
      <div className='results-container'>
        {videos}
      </div>
    )
}

export default ResultsList;
