import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlipCard from "../FlipCard";

export default function Item({ data,openInfoCallback }: any) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate()
  console.log('openInfoCallback',openInfoCallback)

  const navigateToItem = () => {
    navigate(`item-info/${data.recipe.label}`)
  }
  
  return (
    <div className="item" onClick={() => openInfoCallback(data.recipe.label)}>
      <FlipCard isFlipped={isFlipped}>
        <div
          className="item__content"
          onMouseEnter={() => setIsFlipped(!isFlipped)}
        >
          <div className="item__image">
            <img src={data.recipe.image} alt="" />
          </div>
          <div className="item__title">{data.recipe.label}</div>
          <div className="item__description">{data.recipe.shareAs}</div>
        </div>
        <div
          className="item__content"
          onMouseLeave={() => setIsFlipped(!isFlipped)}
        >
          Ingredients: 
          <ol className="item__ingredients">
            {data.recipe.ingredientLines.length &&
              data.recipe.ingredientLines.map((ingredient: string): any => (
                <li className="item__ingredient" key={ingredient}>{ingredient}</li>
              ))}
          </ol>
        </div>
      </FlipCard>
    </div>
  );
}
