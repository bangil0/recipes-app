import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, imgUrl, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img src={imgUrl} alt={title} />
      <h3>ingredients: </h3>
      <ol className={style.lists}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
