import { useState } from 'react';
import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './comments.css';
import buttonIcon from '../../assets/Icons/add_comment.svg';
import Button from '../button/button';
import videoDataJSON from '../../data/video-details.json';

function CommentsView () {
    const commentsButton = "comments";
    const commentsIcon = buttonIcon;
    const [commentData, setCommentData] = useState(videoDataJSON);
    const [selectedComment, setSelectedComment] = useState(commentData[0])
    const date = new Date (selectedComment.timestamp).toLocaleDateString();

    // console.log(selectedVideo.comments)

    return (
        <div className="commentsSection">
            <div className='comments__title'>
                <p>3 comments</p>
            </div>
            <div className='comments__form'>
              
               
                    <div className='comments__form-Container'>
                        <img className="comments__form-image" src={commentsImage} alt="comments photo"/>
                        <form className="comments__form-input">
                        <div className='comments__form-miniContainer'>
                            <label for="userComment">Join the Conversation</label>
                            <input type="text" name="userComment" id="userComment" placeholder=" Add a new comment" />
                        </div>
                        <Button className='cButton' buttonImage={commentsIcon} buttonLabel={commentsButton} /> 
                        </form>
                    </div>
                    </div>
                <span className='commentList__divider'></span>
      
               
                <ul>
                        {selectedComment.comments.map((commentData) => (
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

            </div>
       
    )
}


export default CommentsView;

