import './styles/Navbar.css';
import Logo from '../images/logo.png'
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

export const Navbar = () =>
{

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
                    <NavLink
                    className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                    exact 
                    to="/catalog"
                    >
                        Catalog
                    </NavLink>
                    <NavLink
                    className={ ({isActive}) => isActive ? "active-link" : "unactive-link"}
                    exact 
                    to="/giftcards"
                    >
                        Gift Cards
                    </NavLink>
                    <NavLink 
                    className={ ({isActive}) => isActive ? "active-cart" : "shopping-cart-container"}
                    exact
                    to="/checkout"
                    >
                        <i 
                        class="fa-solid fa-cart-shopping"
                        >
                        </i>
                        <p 
                        className='items-in-cart' 
                        id='items-in-cart'
                        >
                            0
                        </p>
                    </NavLink>
                </div> 
            </div>
        </div>
    )
}