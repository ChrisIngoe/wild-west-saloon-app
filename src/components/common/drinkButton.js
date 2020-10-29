import Button from 'react-bootstrap/Button';
import './drinkButton.css';

const DrinkButton = ({ label, clickHandler }) => {
  return (
    <Button id='drink-button' onClick={clickHandler}>
      {label}
    </Button>
  );
};

export default DrinkButton;
