import './search.scss';
import profile from '../../assets/images/Mohan-muruge.jpg';
import searchPic from '../../assets/Icons/search.svg';
import Button from '../button/button';
import uploadIcon from '../../assets/Icons/upload.svg';

function Search () {

    const uploadLabel = 'Upload';
    const uploadImage = uploadIcon;

    return (
        <div className="searchBar">
            <div className='searchBar__input'>
                <input type='text' placeholder='Search'></input>
                <div className='searchBar__image searchBar__image-deactivate'>
                    <img classname src={profile} alt= 'profile'></img>
                </div>
            </div>
            <div className='desktop__order'>
                <div className='searchBar__image searchBar__image-active'>
                 <img src={profile} alt= 'profile'></img>
            </div>
            <Button buttonImage = {uploadImage} buttonLabel = {uploadLabel}/>
            </div>
        </div>
    )
}

export default Search;