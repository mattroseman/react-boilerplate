import React from 'react';
import loadable from '@loadable/component';

const ChildComponent = loadable(() => import('./ChildComponent.js'));

import './App.scss';


export default function App() {
  return (
    <div id="app-container">
      <h1 id="site-title">Boilerplate App is working!</h1>
      <ChildComponent />
    </div>
  );
}
