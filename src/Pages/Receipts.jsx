import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState("");

  return (
    <div>
      <h2>Task2</h2>
      <input
        type="radio"
        id="pasta"
        name="meal"
        onChange={(e) => setMeal("pasta")}
      />
      <label>Pasta</label>
      <input
        type="radio"
        id="pizza"
        name="meal"
        onChange={(e) => setMeal("pizza")}
      />
      <label>Pizza</label>
      <input
        type="radio"
        id="cake"
        name="meal"
        onChange={(e) => setMeal("cake")}
      />
      <label>Cake</label>
      {/* <button onClick={() => handleSubmit()}>Save</button> */}
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
