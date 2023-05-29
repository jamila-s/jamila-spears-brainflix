import { useState } from 'react';
import videoDataJSON from '../../data/video-details.json';
import './videos.css';

function Videos () {
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoDataJSON[0])
    // const date = new Date (selectedVideo.timestamp).toLocaleDateString();

    const handleSelectVideo = (id) => {
        console.log('handleSelectVideo', id);
        videoData.forEach((selectedVideo) => {
            if(id === selectedVideo.id){
                setSelectedVideo(selectedVideo);
            }
        }) 
    }

    return (

        <div className='videos'>

            <p className='videos__title'> Next Videos </p>

           <ul className='videos__section'>
                {videoData.map((selectedVideo) => (
                <li key={selectedVideo.id} onClick={() => handleSelectVideo(selectedVideo.id)}>
                <div className='videoList__items'>
                    <img src={selectedVideo.image} alt={selectedVideo.title} />
                    <div className='videoList__text'>
                        <p className='videoList__name'>{selectedVideo.title}</p>
                        <p className='videoList__channel'>{selectedVideo.channel}</p>
                    </div>
                </div>
                </li>))}
            </ul> 

            </div>
    
    )

}

export default Videos;