import React, { useState } from 'react'
import useInput from '../../../../hooks/useInput'
import { Ingredient } from '../../../../types/myRecipes'

export default function CreateIngredient () {
  const title = useInput('')
  const image = useInput('')
  const quantity = useInput()
  const measure = useInput()
  const weight = useInput()
  const [ingredient, setIngredient] = useState<Ingredient>()

  const addIngredient = () => {
    const ingredient: Ingredient = {
      title: title.value as string,
      image: image.value as string,
      quantity: quantity.value as string,
      measure: measure.value as string,
      weight: weight.value as string
    }
    setIngredient(ingredient)
    console.log('ingredient', ingredient)
  }
  return (
    <div> <button onClick={addIngredient}>+ Ingredient</button>
    <input {...title} placeholder="Title" type="text"/>
    <input {...image} placeholder="Image URL" type="text" />
    <input {...quantity} placeholder="Quantity" type="number" />
    <input {...measure} placeholder="Measure" type="text" />
    <input {...weight} placeholder="Weight" type="number" /></div>
  )
}
