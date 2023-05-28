import { useState } from 'react';
import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './comments.css';
import buttonIcon from '../../assets/Icons/add_comment.svg';
import Button from '../button/button';
import videoDataJSON from '../../data/video-details.json';

function CommentsView () {
    const commentsButton = "comments";
    const commentsIcon = buttonIcon;
    const [videoData, setVideoData] = useState(videoDataJSON);
    const [selectedVideo, setSelectedVideo] = useState(videoData[0])
    const date = new Date (selectedVideo.timestamp).toLocaleDateString();

    console.log(selectedVideo.comments)

    return (
        <div className="commentsSection">
            <div className='comments__title'>
                <p>3 comments</p>
            </div>
            <div className='comments__form'>
              
                <div className="comments__form-container">
                    <div className='comments__form-miniContainer'>
                        <img className="comments__form-image" src={commentsImage} alt="comments photo"/>
                        <form className="comments__form-input">
                        <label for="userComment">Join the Conversation</label>
                        <input type="text" name="userComment" id="userComment" placeholder=" Add a new comment" />
                        {/* <button> <img src={buttonIcon} alt="button icon" /> Comment</button> */}
                        <Button buttonImage={commentsIcon} buttonLabel={commentsButton} /> 
                        </form>
                    </div>
                </div>
                <span className='commentList__divider'></span>
      
                </div>
                <ul>
                        {selectedVideo.comments.map((commentData) => (
                        <li key={commentData.id}>
                        <div className='commentList'>
                        <span className='dot'></span>
                        
                            <div className='commentList__text-container'>
                            
                                <div className='commentList__text-miniContainer'>
                                    <p className='commentList__text-name'>{commentData.name}</p>
                                    <p className='commentList__text-date'>{date}</p>
                                </div>
                                <p>{commentData.comment}</p>
                            </div>
                        </div>
                        <span className='commentList__divider'></span>
                        
                        </li>))}
                    </ul> 

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


export default CommentsView;

