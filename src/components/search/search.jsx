import './search.scss';
import profile from '../../assets/images/Mohan-muruge.jpg';
import searchPic from '../../assets/Icons/search.svg';
import Button from '../button/button';

function Search () {
    return (
        <div className="searchBar">
            <div className='searchBar__input'>
                <input type='text' placeholder='Search'></input>
            </div>
            <div className='searchBar__image'>
                <img src={profile} alt= 'profile'></img>
            </div>
            
        </div>
    )
}

export default Search;