import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RecipeInfo, Recipe } from "../../types/recipes";

export default function ItemInfo({ info }: any) {
  const params = useParams();
  const { recipes } = useAppSelector((state) => state.recipes);
  // let currentItem: any

  // useEffect(() => {
  //   console.log('recipes in info',recipes)
  //   if(recipes.length){
  //      currentItem =  recipes.find( item => item.recipe.label === params.title)
  //   }
  //   console.log('currentItem',currentItem)
  // },[recipes])
  return (
    <article className="item-info">
      <div className="item-info__header">
        <img src={info.recipe.image} alt={info.recipe.label}></img>
        <h2>{info.recipe.label}</h2>
      </div>
      <div className="item-info__body">
        <div className="item-info__diet-labels item-info__list">
          {info.recipe.dietLabels.length &&
            info.recipe.dietLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </div>
        <div className="item-info__health-labels item-info__list">
          {info.recipe.healthLabels.length &&
            info.recipe.healthLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </div>
        <div className="item-info__cautions item-info__list">
          {info.recipe.cautions.length &&
            info.recipe.cautions.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </div>
        <div className="item-info__ingredient-lines item-info__list">
          {info.recipe.ingredientLines.length &&
            info.recipe.ingredientLines.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </div>
        <div className="item-info__ingrediens item-info__list">
          {info.recipe.ingredients.length &&
            info.recipe.ingredients.map((item: any) => (
              <li key={item}>
                <article className="ingridien">
                  <div className="ingridient__text">
                  {item.text}
                  </div>
                  <div className="ingridient__quantity">
                  {item.quantity}
                  </div>
                  <div className="ingridient__measure">
                  {item.measure}
                  </div>
                  <div className="ingridient__food">
                  {item.food}
                  </div>
                  <div className="ingridient__weight">
                  {item.weight}
                  </div>
                  <div className="ingridient__food-category">
                  {item.foodCategory}
                  </div>
                  <img src={item.image} alt={item.text} className="ingridient__image" />
                  </article>
              </li>
            ))}
        </div>
      </div>
    </article>
  );
}
