
import Header from './components/header/header'
import Active from './components/active video/activeVideo';
import CommentsView from './components/comments/comments';
import Videos from './components/video list/videos';


import './App.css';

function App() {


 

  // console.log(videoData)

  return (
    
    <div className="App">
      <Header />
      <Active />
      <CommentsView />
      <Videos />
     


    

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
