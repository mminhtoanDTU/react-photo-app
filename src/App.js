import React, { Suspense, useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { NotFound, Header, Loading, Footer, WelcomeForm } from 'components';

const Photos = React.lazy(() => import('./features/Photos'));

function App() {
  useEffect(() => {
    //AOS is Animation when scroll
    AOS.init({
      duration: 600
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/photos" />
          <Route path="/photos" component={Photos} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
