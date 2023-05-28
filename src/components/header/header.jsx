import Logo from "../logo/logo";
import Search from "../search/search";
import Button from "../button/button";
import uploadIcon from '../../assets/Icons/upload.svg';


function Header(){

    const uploadLabel = 'Upload';
    const uploadImage = uploadIcon;

    return (
        <header>
            <Logo />
            <Search />
            <Button buttonImage = {uploadImage} buttonLabel = {uploadLabel} />
        </header>
    )
}

export default Header;