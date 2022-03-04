import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

import logo from "../img/logo.png"
import navLogo from "../img/nav.jpg"

const Header = ({ setSideToggle }) => {

    const {cart} = useSelector(state => state.cart) 

    return (
        <div className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__wrap-top">
                        <NavLink to="/" className="header__logo">
                            <img className="header__img" src={logo} alt="logo" />
                        </NavLink>
                        <form action="" className="header__form">
                            <input
                                type="text"
                                className="header__input"
                                placeholder="Search Your Products"
                            />
                            <button className="header__submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                        <ul className="header__right">
                            <li className="header__icons">
                                <Link to="/signin" className="header__sign active">
                                    sign in
                                </Link>
                            </li>
                            <li className="header__icons">
                                <NavLink to="/cart" className="header__cart active">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span className="header__cart-text">Card</span>
                                    <span className="header__cart-badge">{ cart.length}</span>
                                </NavLink>
                            </li>
                            <li className="header__icons header__icons--avatar">S</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nav header__nav">
                <span className="nav__link nav__link--all" onClick={() => setSideToggle(true)}>
                    <i className="nav__link-icon fa fa-bars"></i>
                    {/* <span>all</span>  */}
                </span>
                {/* <a href="/" className="nav__link">
                    mobiles
                </a>
                <a href="/" className="nav__link">
                    best sellers
                </a>
                <a href="/" className="nav__link">
                    fashion
                </a>
                <a href="/" className="nav__link">
                    customer service
                </a>
                <a href="/" className="nav__link">
                    electronics
                </a>
                <a href="/" className="nav__link">
                    prime
                </a>
                <a href="/" className="nav__link">
                    today's deals
                </a>
                <a href="/" className="nav__link">
                    amazon play
                </a> */}
                <a href="/" className="nav__link nav__link--img">
                    <img src={navLogo} alt="nav" />
                </a>
            </div>
        </div>
    );
};

export default Header