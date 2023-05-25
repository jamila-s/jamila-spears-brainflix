import './search.scss'
import profile from '../../assets/images/Mohan-muruge.jpg'

function Search () {
    return (
        <div className="searchBar">
            
            <input type='text' placeholder='Search'></input>
            <img src={profile} alt= 'profile'></img>
        </div>
    )
}

export default Search;