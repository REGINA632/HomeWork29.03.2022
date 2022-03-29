import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div>
      {meal === "pasta" ? (
        <ul>
          <li>tomato</li>
          <li>noodle</li>
          <li>water</li>
        </ul>
      ) : meal === "pizza" ? (
        <ul>
          <li>tomato</li>
          <li>pepper</li>
          <li>cheese</li>
        </ul>
      ) : (
        <ul>
          <li>sugar</li>
          <li>oil</li>
          <li>flour</li>
        </ul>
      )}
    </div>
  );
};

export default Ingredients;
