import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './poster.scss';

function Poster () {
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
 

    return (
        <div className='videoContainer'>
        <video poster={selectedVideo.image} controls>
            <source src={selectedVideo.video}></source>
        </video>
    </div>
    )}

    export default Poster;