import React from 'react';

import ChildComponent from './ChildComponent.js';

import './App.scss';


export default function App() {
  return (
    <div id="app-container">
      <h1 id="site-title">Boilerplate App is working!</h1>
      <ChildComponent />
    </div>
  );
}
