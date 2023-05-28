import { useState } from 'react';
import videoDataJSON from './data/video-details.json';
import Header from './components/header/header'
import Active from './components/active video/activeVideo';
import Comments from './components/comments/comments';


import './App.css';

function App() {


 

  // console.log(videoData)

  return (
    
    <div className="App">
      <Header />
      <Active />
      <Comments />
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
