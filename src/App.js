import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Result, Button } from 'antd'
import { Header, Loading } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Photos = React.lazy(() => import('./features/Photos'))

function App() {

  useEffect(() => {
    window.document.title = `Awesome Photos`;
    AOS.init({
      duration: 600
    });
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/photos" />
          <Route path="/photos" component={Photos} />
          <Route path="/login">
            <Result
              title="Cooming soon!"
              extra={
                <Button type="primary" key="console">
                  <Link to="/">
                    Go Home
                  </Link>
                </Button>
              }
            />
          </Route>

        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
