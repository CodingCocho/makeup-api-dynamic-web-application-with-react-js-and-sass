import './styles/Navbar.css';
import Logo from '../images/logo.png'

export const Navbar = () =>
{
    return (
        <div className="navbar-component">
            <div className="navbar">
                <div className="left-flex-container">
                    <img 
                    alt="makeup-logo" 
                    className="logo"
                    src={Logo}  
                    />
                    <div 
                    className="search-bar-container"
                    >
                        <input  
                        className="search-bar-input" 
                        id="search-bar-input" 
                        type="text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}