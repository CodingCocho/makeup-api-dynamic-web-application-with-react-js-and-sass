import './styles/Navbar.css';
import Logo from '../images/logo.png'
import {NavLink} from 'react-router-dom';
import{useSelector} from 'react-redux';

export const Navbar = () =>
{
    const cartLength = useSelector(state => state.cart.itemsAdded);
    
    return (
        <div className="navbar-component">
            <div className="navbar">
                <div className="left-flex-container">
                    <NavLink 
                    className="logo-flex-container"
                    to="/"
                    >
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
                    </ NavLink>
                </div>
                <div className="right-flex-container">
                    <NavLink
                    className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                    to="/catalog"
                    >
                        Catalog
                    </NavLink>
                    <NavLink
                    className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                    to="/giftcards"
                    >
                        Gift Cards
                    </NavLink>
                    <NavLink 
                    className={ ({isActive}) => isActive ? "active-cart" : "shopping-cart-container"}
                    to="/checkout"
                    >
                        <i class="fa-solid fa-bag-shopping"></i>
                        <p 
                        className='items-in-cart' 
                        id='items-in-cart'
                        >
                            {cartLength}
                        </p>
                    </NavLink>
                </div> 
            </div>
        </div>
    )
}