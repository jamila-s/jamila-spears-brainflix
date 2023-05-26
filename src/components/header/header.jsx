import Logo from "../logo/logo";
import Search from "../search/search";
import Button from "../button/button";

function Header(){
    return (
        <header>
            <Logo />
            <Search />
            <Button />
        </header>
    )
}

export default Header;