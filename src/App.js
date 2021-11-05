import React from "react";
import { RandomMeal, Meal } from "./components";

//TODOs
// 1. Search fro meals
// 2. Display the results
// 3. Random / Featured meals 
// Bonus:
// - Favorite Recipe

function App() {
  return (
    <div className="App">
      <input type="text"/>
        <RandomMeal />

        <Meal />
        <Meal />
    </div>
  );
}

export default App;
