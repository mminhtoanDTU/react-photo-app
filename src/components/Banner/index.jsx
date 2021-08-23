import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss'

Banner.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
};

Banner.defaultProps = {
    imageUrl: 'https://source.unsplash.com/random',
    title: 'Welcome !'
}

function Banner(props) {
    const { imageUrl, title } = props;
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
            <h1 className="banner-title">{title}</h1>
        </div>
    );
}

export default Banner;