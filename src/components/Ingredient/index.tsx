import React from "react"
import { roundNumber } from "../../helpers/roundNumber"

export default function Ingredient({
  title = '',
  text = '',
  weight = 0,
  image = '',
  quantity = 0,
  measure = 0
}) {
  return (
    <div className="ingredient">
      <li key={title} className="ingredient">
        <article className="ingredient__item">
          <div className="ingredient__text">
            Ingredient: <span>{text}</span>
          </div>
          <div className="ingredient__quantity">Quantity: <span>{quantity}</span></div>
            <div className="ingredient__measure">Measure: <span>{measure}</span></div>
            {/* <div className="ingredient__food">Food: <span>{food}</span></div> */}
          <div className="ingredient__weight">
            Weight: <span>{roundNumber(weight, 1)}</span>
          </div>
          {/* <div className="ingredient__food-category">
            Food category: <span>{item.foodCategory}</span>
            </div> */}
          <img src={image} alt={text} className="ingredient__image" />
        </article>
      </li>
    </div>
  )
}
