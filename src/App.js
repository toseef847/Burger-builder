import React from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import BuildControls from "./components/Burger/BuildControls/BuildControls";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
        <BuildControls />
      </Layout>
    </div>
  );
}

export default App;
