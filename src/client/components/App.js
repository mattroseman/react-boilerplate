import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import loadable from '@loadable/component';

const ChildComponent = loadable(() => import('./ChildComponent.js'));

import '../global.scss';
import './App.scss';


export default function App() {
  return (
    <div id="app-container">
      <h1 id="site-title">Boilerplate App is working!</h1>
      <ChildComponent />
    </div>
  );
}
