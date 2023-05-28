import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './videos.css';

function Videos () {
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    // const date = new Date (selectedVideo.timestamp).toLocaleDateString();

    return (

        <div>

            <p className='videoListTitle'>Next Videos</p>

           <ul className='videos'>
                {videoData.map((video) => (
                <li key={video.id}>
                <div className='videoList'>
                    <img src={video.image} alt={video.title} />
                    <div className='videoList__text'>
                        <p className='videoList__name'>{video.title}</p>
                        <p className='videoList__channel'>{video.channel}</p>
                    </div>
                </div>
                </li>))}
            </ul> 

            </div>
    
    )

}

export default Videos;