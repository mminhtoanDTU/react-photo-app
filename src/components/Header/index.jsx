import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './header.scss';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="wrapper">
            <div className="header container">
                <NavLink to="/">
                    <h1 className="header__logo">Minh Toan</h1>
                </NavLink>
                <ul className="header__navbar">
                    <li className="header__navbar-item">
                        <NavLink to="/photos">Photos</NavLink>
                    </li>
                    <li className="header__navbar-item primary">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;