import DrinkButton from '../common/drinkButton';

const BottleDrinkButton = () => {
  const getDrinkHandler = () => {
    fetch('https://saloon-api.azurewebsites.net/bottle')
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  };
  return <DrinkButton clickHandler={getDrinkHandler} label='Bottle' />;
};

export default BottleDrinkButton;
