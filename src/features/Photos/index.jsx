import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import PhotoPage from './Pages/PhotoMainPage'
import PhotoAddPage from './Pages/PhotoAddPage';
import { NotFound } from 'components';


function Photos(props) {
    const match = useRouteMatch();
    return (
        <>
            <Switch>
                <Route exact path={match.url} component={PhotoPage} />
                <Route path={`${match.url}/add`} component={PhotoAddPage} />
                <Route path={`${match.url}/edit/:slug`} component={PhotoAddPage} />

                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default Photos;