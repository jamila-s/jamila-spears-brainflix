import { useState } from 'react';
import videoDataJSON from './data/video-details.json';
import Header from './components/header/header'
import Search from './components/search/search'
import Button from './components/button/button';
import './App.css';

function App() {


  const [videoData, setVideoData] = useState(videoDataJSON);

  console.log(videoData)

  return (
    <div className="App">
      <Header />
      <Search />
      <Button />
      <h1>Hello World</h1>

      <ul>
        {videoData.map((video) => <li>{video.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
