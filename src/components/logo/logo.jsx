import logoSvg from '../../assets/images/BrainFlix-logo.svg';
import './logo.scss'

function Logo () {
    return (
        <div className='logo'> 
            <img className='logoImage' src={logoSvg} alt= 'logo' />
        </div>
    )
}

export default Logo;