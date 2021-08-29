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
                    <h1 className="header__logo">Photo Diary</h1>
                </NavLink>
                <span className="header__username">
                    Welcome!
                </span>
            </div>
        </header>
    );
}

export default Header;