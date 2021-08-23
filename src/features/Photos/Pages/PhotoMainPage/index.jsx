import React from 'react';
import PropTypes from 'prop-types';
import { Banner } from 'components';
import { Button } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import './photomainpage.scss';

PhotoPage.propTypes = {

};

function PhotoPage(props) {
    const match = useRouteMatch();
    return (
        <>
            <Banner title="Place Awesome Photos 😍" />
            <div className="content container">
                <Button type="primary">
                    <Link to={`${match.url}/add`}>Add new photo</Link>
                </Button>
            </div>
        </>
    );
}

export default PhotoPage;