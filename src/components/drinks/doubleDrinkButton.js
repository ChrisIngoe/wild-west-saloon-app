import React from 'React';
import DrinkButton from '../common/drinkButton';

const DoubleDrinkButton = () => {
  const getDrinkHandler = () => {
    fetch('https://saloon-api.azurewebsites.net/double')
      .then((res) => res.json())
      .then(
        () => {
          //console.log(res);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  };
  return <DrinkButton clickHandler={getDrinkHandler} label='Double' />;
};

export default DoubleDrinkButton;
