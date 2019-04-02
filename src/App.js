import React from "react";
import {reducer} from "./state/reducer";
import {StateProvider} from "./state/StateProvider";
import "./App.scss";
import DiceContainer from "./components/DiceContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
const siteMeta = {
  title: "AeroDice",
  subTitle: "Make great Aeropress coffee recipies, without thinking!"
}

  const initialState = {
    results: [],
    diceAnimating: false,
    inBrew: false,
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Header meta={siteMeta} />
        <main className="App-main">
          <DiceContainer />
        </main>
        <Footer />
      </div>
    </StateProvider>
  );
};

export default App;
