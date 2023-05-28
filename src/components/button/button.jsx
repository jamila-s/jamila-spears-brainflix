import upload from '../../assets/Icons/upload.svg';
import './button.scss';

function Button  (props)  {
    const { buttonLabel } = props;
    const { buttonImage } = props;
  
    return (
        <div className='button__container'>
            
            <button><img src={buttonImage} />{buttonLabel}</button>
        </div>
  )};

export default Button;