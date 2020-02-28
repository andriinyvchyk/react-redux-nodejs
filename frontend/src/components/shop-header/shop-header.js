import React from 'react';
import './shop-header.css';
import { Link, NavLink } from 'react-router-dom';

const ShopHeader = () => {
    return (
        <div className='container'>
            <div className='header-top'>
                <div className='header-top-info d-flex justify-content-between'>
                    <div className='header-top-info-box'>
                        <span className='header-top-info-span'>Call us: <span className='header-top-info-span-number'>+3(800) 2345-6789</span> | 7 Days a week from 9:00 am to 7:00 pm</span>
                    </div>
                    <div className='inner-box d-flex'>
                        <div className='header-top-info-shop'><i className="fas fa-shopping-cart"><span className="badge badge-primary badge-pill">0</span></i></div>
                        <div className='header-top-info-login'> <Link to='/login'>
                            <span>Login</span>
                        </Link>
                        </div>
                        <div className='header-top-info-input'> <input type='text' placeholder='search'></input></div>
                    </div>
                </div>
                <div className='header-top-navbar d-flex justify-content-between'>
                    <div className='header-top-navbar-logo'>
                        <img src="https://ld-wp.template-help.com/woocommerce_prod-14924/v2/wp-content/themes/variegated/assets/images/logo.png" alt="Variegated" className="site-link__img" />
                    </div>
                    <div className='header-top-navbar-link'>
                        <ul className='ul-nav d-flex'>
                            <li>
                                <NavLink exact to='/home' activeStyle={{ color: "#FFB4B4" }}>HOME</NavLink>
                            </li><li>
                                <NavLink to='/about' activeStyle={{ color: "#FFB4B4" }}>ABOUT</NavLink>
                            </li><li>
                                <NavLink to='/blog' activeStyle={{ color: "#FFB4B4" }}>BLOG</NavLink>
                            </li><li>
                                <NavLink to='/shop' activeStyle={{ color: "#FFB4B4" }}>SHOP</NavLink>
                            </li><li>
                                <NavLink to='/contacts' activeStyle={{ color: "#FFB4B4" }}>CONTACTS</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='header-top-navbar-internet'>
                        <a href='#'><i className="fab fa-facebook-f"></i></a>
                        <a href='#'><i className="fab fa-instagram"></i></a>
                        <a href='#'><i className="fab fa-google"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopHeader;