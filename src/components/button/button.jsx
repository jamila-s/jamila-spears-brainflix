import upload from '../../assets/Icons/upload.svg';
import './button.scss';

function Button () {
    return(
        <div className="button">
            <button><img className='uploadImage' src={upload} alt='upload' />Upload</button>
        </div>
    )
}

export default Button;