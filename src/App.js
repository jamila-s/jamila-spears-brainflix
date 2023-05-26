import { useState } from 'react';
import videoDataJSON from './data/video-details.json';
import Header from './components/header/header'
import Search from './components/search/search'
import Button from './components/button/button';
import Active from './components/active video/activeVideo';
import './App.css';

function App() {


 

  // console.log(videoData)

  return (
    
    <div className="App">
      <Header />
      <Active />
      {/* <h1>{selectedVideo.title}</h1>
      <img className = "activeVideo" src={selectedVideo.image} alt={selectedVideo.title} /> */}


    

      {/* <ul>
        {videoData.map((video) => (
        <li key={video.id}>
          <img src={video.image} alt={video.title} />
          
          </li>))}
      </ul> */}
    </div>
   
  );
}

export default App;
