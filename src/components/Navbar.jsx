import './styles/Navbar.css';
import Logo from '../images/logo.png'

export const Navbar = () =>
{
    return (
        <div className="navbar-component">
            <div className="navbar">
                <div className="left-flex-container">
                    <div className="logo-flex-container">
                        <p 
                        className="brand-name"
                        >
                            Isabella's Closet
                        </p>
                        <img 
                        alt="makeup-logo" 
                        className="logo"
                        src={Logo}  
                        />
                    </div>
                    <div 
                    className="search-bar-container"
                    >
                        <i 
                        class="fa-solid fa-magnifying-glass"
                        >
                        </i>
                        <input  
                        className="search-bar-input" 
                        id="search-bar-input"
                        placeholder='Search...' 
                        type="text"
                        />
                    </div>
                </div>
                <div className="right-flex-container">
                    <a 
                    className="gift-card-page" 
                    id="link"
                    href="google.com"
                    >
                        Gift Cards                        
                    </a>
                    <div className="shopping-cart-container">
                        <i 
                        class="fa-solid fa-cart-shopping"
                        >
                        </i>
                        <p className='items-in-cart' id='items-in-cart'>2</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}