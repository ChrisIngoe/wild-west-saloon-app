import React, {useState} from 'react';
import bgImage from './saloon.jpg';
import './App.css';
import Alert from 'react-bootstrap/Alert'
import SingleDrinkButton from './components/drinks/singleDrinkButton';
import DoubleDrinkButton from './components/drinks/doubleDrinkButton';
import BottleDrinkButton from './components/drinks/bottleDrinkButton';

function App() {
  const [showDrink, setShowDrink] = useState(false);
  const [drink, setDrink] = useState('');
  const closeAlert = () => {setShowDrink(false)};
  const setNewDrink = (drink) => {
    setShowDrink(true);
    setDrink(drink);
  };
  return (
    <div className='App' style={{ backgroundImage: `url(${bgImage})` }}>
      <Alert variant='primary' show={showDrink} dismissible onClose={closeAlert}>
       {drink}
      </Alert>
      <SingleDrinkButton setDrink={setNewDrink}/>
      <DoubleDrinkButton setDrink={setNewDrink}/>
      <BottleDrinkButton setDrink={setNewDrink}/>
      <BottleDrinkButton setDrink={setNewDrink}/>
    </div>
  );
}

export default App;
