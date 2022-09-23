import React from 'react'
import { MyRecipe } from '../../types/myRecipes'
import Ingredient from '../Ingredient'

export default function ReceiptCard({title,image,ingredients,weight,totalTime,steps,quantity,measure}: MyRecipe)  {
  return (
    <div className='receipt-card'>
      <h2 className="receipt-card__header">ReceiptCard</h2>
      <div className="receipt-card__body">
        <div className="receipt-card__title">Title: {title}</div>
        <div className="receipt-card__image"><img src={image} alt={title}></img></div>
        <div className="receipt-card__weight">Weight: {weight}</div>
        <div className="receipt-card__totalTime">Total time: {totalTime}</div>
        <div className="receipt-card__quantity">Quantity: {quantity}</div>
        <div className="receipt-card__measure">Measure: {measure}</div>
        <ul className="receipt-card__ingredients">
        {ingredients.length > 0  && ingredients.map((ingredient )=> <li className="receipt-card__ingredient" key={ingredient.title}>
          <Ingredient {...ingredient} />
        </li>)}
        </ul>
        <ul className="receipt-card__steps">
        {steps.length > 0 && steps.map((step) => <li className="receipt-card__step" key={step}>{step}</li>)}
        </ul>
      </div>
    </div>
  )
}
