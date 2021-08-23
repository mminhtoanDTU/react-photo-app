import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import PhotoPage from './Pages/PhotoMainPage'
import PhotoAddPage from './Pages/PhotoAddPage';

Photos.propTypes = {

};

function Photos(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route exact path={`${match.url}`} component={PhotoPage} />
                <Route path={`${match.url}/add`} component={PhotoAddPage} />
            </Switch>
        </>
    );
}

export default Photos;