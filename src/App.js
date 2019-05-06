import React from 'react';
import './App.css';
import DiceRoll from './DiceRoll';

function App() {

  const myTitle = 'Dice'
  return (
    <>
    <DiceRoll title = {myTitle} />
    </>
  );
}

export default App;
