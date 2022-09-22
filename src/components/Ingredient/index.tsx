import React from "react"
import { roundNumber } from "../../helpers/roundNumber"

export default function Ingredient({
  title = '',
  text = '',
  weight = '',
  image = '',
  quantity = '',
  measure = ''
}) {
  return (
    <div className="ingredient">
        <article className="ingredient__item">
        <div className="ingredient__title">
            Ingredient: <span>{title}</span>
          </div>
          {/* <div className="ingredient__text">
            text: <span>{text}</span>
          </div> */}
          <div className="ingredient__quantity">Quantity: <span>{quantity}</span></div>
            <div className="ingredient__measure">Measure: <span>{measure}</span></div>
            {/* <div className="ingredient__food">Food: <span>{food}</span></div> */}
          <div className="ingredient__weight">
            Weight: <span>{weight}</span>
          </div>
          {/* <div className="ingredient__food-category">
            Food category: <span>{item.foodCategory}</span>
            </div> */}
          <img src={image} alt={text} className="ingredient__image" />
        </article>
    </div>
  )
}
