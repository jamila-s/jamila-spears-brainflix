import commentsImage from '../../assets/images/Mohan-muruge.jpg';
import './comments.css';
import buttonIcon from '../../assets/Icons/add_comment.svg';
import Button from '../button/button';

function Comments () {
    const commentsButton = "comments";
    const commentsIcon = buttonIcon;

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
                
                        
                    
                </div>
            </div>
       
    )
}


export default Comments;

