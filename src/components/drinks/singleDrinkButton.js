import DrinkButton from '../common/drinkButton';

const SingleDrinkButton = () => {
  const getDrinkHandler = () => {
    fetch("https://saloon-api.azurewebsites.net/single")
      .then(res => res.json())
      .then(res => {console.log(res)},
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  return (
    <DrinkButton clickHandler={getDrinkHandler} label='Single'/>
  );
}

export default SingleDrinkButton;
