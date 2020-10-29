import React from 'React';
import bgImage from './saloon.jpg';
import './App.css';
import SingleDrinkButton from './components/drinks/singleDrinkButton';
import DoubleDrinkButton from './components/drinks/doubleDrinkButton';
import BottleDrinkButton from './components/drinks/bottleDrinkButton';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${bgImage})` }}>
      <SingleDrinkButton />
      <DoubleDrinkButton />
      <BottleDrinkButton />
    </div>
  );
}

export default App;
