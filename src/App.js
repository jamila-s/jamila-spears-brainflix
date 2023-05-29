
import Header from './components/header/header'
import Active from './components/active video/activeVideo';
import CommentsView from './components/comments/comments';
import Videos from './components/video list/videos';
import Poster from './components/poster/poster';


import './App.css';

function App() {


 

  // console.log(videoData)

  return (
    
    <div className="App">
      <Header />
    
        <Poster />
        <div className='App__container'>
        <div className='App__container-mini'>
        <Active />
        <CommentsView />
        </div>
        <span className='divider'></span>
        <Videos />
     </div>


    

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
