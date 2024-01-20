import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/images/logo/de Compras.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const pathName = window.location.pathname.split("/")[1]
   
    const [menu, setMenu] = useState(pathName ? pathName : 'home');
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="bars" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <ul className={`nav-links ${mobileMenuVisible ? 'show' : ''}`}>
                <li onClick={() => { setMenu("home") }}>
                    <Link to='/' className={`pages ${menu === "home" ? 'active-page' : ''}`}>Home</Link>
                </li>
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/shop' className={`pages ${menu === "shop" ? 'active-page' : ''}`}>Shop</Link>
                </li>
                <li onClick={() => { setMenu("themes") }}>
                    <Link to='/themes' className={`pages ${menu === "themes" ? 'active-page' : ''}`}>Themes</Link>
                </li>
                <li onClick={() => { setMenu("about") }}>
                    <Link to='/about' className={`pages ${menu === "about" ? 'active-page' : ''}`}>About</Link>
                </li>
                <li onClick={() => { setMenu("contact") }}>
                    <Link to='/contact' className={`pages ${menu === "contact" ? 'active-page' : ''}`}>Contact Us</Link>
                </li>
                <li onClick={() => { setMenu("login") }}>
                    <Link to='/login' className={`pages ${menu === "login" ? 'active-page' : ''}`}>Login/Sign Up</Link>
                </li>
                <li onClick={() => { setMenu("cart") }}>
                    <Link to='/cart' className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`}>
                        <FontAwesomeIcon icon={faCartShopping} className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`} />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
