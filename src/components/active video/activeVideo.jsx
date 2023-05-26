import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './activeVideo.css';




// console.log(selectedVideo);

function Active () {
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    return (
        <div className='activeVideoPlayer'>
            <h1>{selectedVideo.title}</h1>
            <img className = "activeVideo" src={selectedVideo.image} alt={selectedVideo.title} />
        </div>

)}

export default Active;