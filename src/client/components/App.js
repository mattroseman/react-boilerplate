import React, { Suspense } from 'react';

const ChildComponent = React.lazy(() => import('./ChildComponent.js'));

import './App.scss';


export default function App() {
  return (
    <div id="app-container">
      <h1 id="site-title">Boilerplate App is working!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ChildComponent />
      </Suspense>
    </div>
  );
}
