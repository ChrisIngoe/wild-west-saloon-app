import React from 'react';
import PropTypes from 'prop-types';
import DrinkButton from '../common/drinkButton';

const SingleDrinkButton = ({setDrink}) => {
  const getDrinkHandler = () => {
    fetch('https://saloon-api.azurewebsites.net/single')
      .then((res) => res.json())
      .then(
        (res) => {
          setDrink(res.name);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  };
  return <DrinkButton clickHandler={getDrinkHandler} label='Single' />;
};

SingleDrinkButton.propTypes = {
  setDrink: PropTypes.func.isRequired
};

export default SingleDrinkButton;
