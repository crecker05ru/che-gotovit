import React, { useEffect, useState } from 'react'
import Ingredient from '../Ingredients/Ingredient'

export default function Ingredients ({
  ingredients,
  isEdit = false,
  setIngredients = () => {}
}: any) {
  const [editIngredients, setEditIngredients] = useState(ingredients)
  const updateIngredient = (id: number, ingredient: any) => {
    const newIngredients = editIngredients.map((item: any, index: number) =>
      index === id ? { ...item, ...ingredient } : item
    )
    setEditIngredients(newIngredients)
    // ingredients[index] = ingredient
  }
  useEffect(() => {
    setIngredients(editIngredients)
    console.log('editIngredients', editIngredients)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editIngredients])

  return (
    <ul className="create-ingredients row">
      {ingredients.length > 0 &&
        ingredients.map((ingredient: any, index: number) => (
          <li className="create-ingredient" key={index}>
            <Ingredient
              id={index}
              title={ingredient.title}
              image={ingredient.image}
              weight={ingredient.weight}
              quantity={ingredient.quantity}
              measure={ingredient.measure}
              isEdit={isEdit}
              updateIngredient={updateIngredient}
            />
          </li>
        ))}
    </ul>
  )
}
