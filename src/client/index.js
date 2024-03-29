import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App.js';

import './global.scss';


const HotApp = hot(App);

ReactDOM.render(
  <HotApp />,
  document.getElementById('root')
);
