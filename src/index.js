import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './assets/styles/index.scss'
import App from './App';
import { Provider } from 'react-redux';
import store from 'App/store';
import Favicon from 'react-favicon';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Favicon url="https://res.cloudinary.com/mminhle771/image/upload/v1629867782/Firstfear-Whistlepuff-Image-heart_lbbumz.ico" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

