import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './drinkButton.css';

const DrinkButton = ({ label, clickHandler }) => {
  return (
    <Button className='drink-button' onClick={clickHandler}>
      {label}
    </Button>
  );
};

DrinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DrinkButton;
