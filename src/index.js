/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page-admin';
import Backend from './backend';
import * as serviceWorker from './serviceWorker';

const backend = new Backend();

ReactDOM.render(
  <React.StrictMode>
    <App backend={backend} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
