import React from 'react';
import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    //BEM approche logique pour les noms des classes CSS. class naming convention.
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
      {/* swipebutons */}
    </div>
  );
}

export default App;
