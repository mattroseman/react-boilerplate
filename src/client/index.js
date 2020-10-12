import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
// import { hot } from 'react-hot-loader/root';
import { loadableReady } from '@loadable/component';

import App from './components/App.js';

import './global.scss';


// const HotApp = hot(App);

loadableReady(() => {
  ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
  );
});
