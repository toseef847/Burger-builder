import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Modal/Modal";
import Summary from "../../components/Burger/Summary/Summary";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";
import errorHandler from "../../hoc/errorHandler/errorhandler";

const INGREDIENT_PRICES = {
  salad: 0.3,
  cheese: 0.4,
  meat: 1.7,
  bacon: 1.5,
};

class BurgerBuilder extends Component {
  componentDidMount() {
    axios
      .get("https://react-burger-builder-544df.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((err) => this.setState({ error: true }));
    // .catch((error) => console.log(error.message));
  }
  state = {
    ingredients: null,
    purchasing: false,
    purchasable: false,
    totalPrice: 5,
    loading: false,
    error: false,
  };

  purchaseHaldler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHaldler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHaldler = () => {
    // alert("You Continue!");
    this.setState({ loading: true });
    const date = new Date();
    const data = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice.toFixed(2),
      customer: {
        name: "Toseef",
        email: "toseefhasan@gmail.com",
        address: {
          street: "some street #",
          zipCode: "54600",
          city: "Lahore",
        },
      },
      deliveryType: "fast",
      orderDate: date.toDateString(),
      orderTime: date.toLocaleTimeString(),
    };
    axios
      .post("orders.json", data)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
      });
  };
  updatePurchase = (ingredients) => {
    const sumIngredients = Object.keys(ingredients)
      .map((ig) => {
        return ingredients[ig];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sumIngredients > 0 });
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = INGREDIENT_PRICES[type];
    const updatedPrice = oldPrice + newPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchase(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if (updatedCount < 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = INGREDIENT_PRICES[type];
    const updatedPrice = oldPrice - newPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchase(updatedIngredients);
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Ingredients could not be loaded.</p>
    ) : (
      <Loader />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchasing={this.purchaseHaldler}
          />
        </Aux>
      );
      var summary = (
        <Summary
          ingredients={this.state.ingredients}
          proceed={this.purchaseContinueHaldler}
          cancel={this.purchaseCancelHaldler}
          price={this.state.totalPrice}
        />
      );
      if (this.state.loading) {
        summary = <Loader />;
      }
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} hide={this.purchaseCancelHaldler}>
          {summary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
export default errorHandler(BurgerBuilder, axios);
