import React from 'react';
import "./Filter.css"

const Filter = () => {
  return (
    <div className="filtering">
      <h3 className="cat-title">Select the category</h3>
      <div className="cat-section">
      <select name="categories" className="categories">
        <option value="beef">Beef</option>
        <option value="breakfast">Breakfast</option>
        <option value="chicken">Chicken</option>
        <option value="dessert">Dessert</option>
        <option value="goat">Goat</option>
        <option value="lamb">Lamb</option>
        <option value="miscellaneous">Miscellaneous</option>
        <option value="pasta">Pasta</option>
        <option value="pork">Pork</option>
        <option value="seafood">Seafood</option>
        <option value="side">Side</option>
        <option value="starter">Starter</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
    </select>
      </div>
    </div>
  );
};

export default Filter;