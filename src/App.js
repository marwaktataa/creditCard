import React from 'react';
import './App.css';
import Titre from './credit-cart';
import Gris from './zone-gris';
import Number from './number';
import MasterCard from './master-card';
import Cardholder from './cardholder';



function App() {
  return (
    <div className="container">
      <div className="sous-container">
        <Titre />
        <Gris />
        <Number />
        <MasterCard />
        <Cardholder />
      </div>
     
    </div>
    
  );
}

export default App;
