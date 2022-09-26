import React, { useState } from "react"
import { useActions } from "../../hooks/useActions"
import useInput from "../../hooks/useInput"
import { MyRecipe } from "../../types/myRecipes"
import { EditableDIV } from "../EditableDIV"
import Ingredient from "../Ingredient"

export default function RecipeCard({
  title,
  image,
  ingredients,
  weight,
  totalTime,
  steps,
  quantity,
  measure,
}: MyRecipe) {
  const [isEdit, setIsEdit] = useState(false)
  const editTitle = useInput(title)
  const editImage = useInput(image)
  const [editIngredients, setEditIngredients] = useState(ingredients)
  const editWeight = useInput(weight)
  const editTotalTime = useInput(totalTime)
  const [editSteps, setEditSteps] = useState(steps)
  const editQuantity = useInput(quantity)
  const editMeasure = useInput(measure)
  const [editedRecipe, setEditedRecipe] = useState({})
  const { editMyRecipe } = useActions()
  const editModeHandler = () => {
    setIsEdit(true)
  }
  const editRecipeHandler = () => {
    let item = {
      title,
      image: editImage.value,
      weight: editWeight.value,
      totalTime: editTotalTime.value,
      ingredients: editIngredients,
      steps: editSteps
    }
    setEditedRecipe(item)
    editMyRecipe(item)
    setIsEdit(false)
    console.log('item',item)
    console.log('editedRecipe',editedRecipe)
    console.log('editImage.value',editImage.value)
  }
  return (
    <div className="recipe-card">
      <div className="recipe-card__body">
        {/* <h3 className="recipe-card__title">{isEdit ? <EditableDIV className="edit-recipe__title edit" {...editTitle}/> : <span>Title: {title}</span>}</h3> */}
        <h3 className="recipe-card__title">{title}</h3>
        {isEdit ? (
          <div
            className="recipe-card__icon edit-done-icon"
            onClick={editRecipeHandler}
          ></div>
        ) : (
          <div
            className="recipe-card__icon edit-icon"
            onClick={editModeHandler}
          ></div>
        )}

        <div className="recipe-card__image">
          {isEdit ? (
            // <EditableDIV className="edit-recipe__image edit" {...editImage} />
            <input className="edit-recipe__image edit" {...editImage}/>
          ) : (
            <img src={image} alt={title} className="recipe-card__image"></img>
          )}
        </div>
        <div className="recipe-card__weight">
          {isEdit ? (
            // <EditableDIV className="edit-recipe__weight edit" {...editWeight} />
            <input className="edit-recipe__weight edit" {...editWeight}/>
          ) : (
            <span>Weight: {weight}</span>
          )}
        </div>
        <div className="recipe-card__totalTime">
          {isEdit ? (
            // <EditableDIV
            //   className="edit-recipe__total-time edit"
            //   {...editTotalTime}
            // />
            <input className="edit-recipe__total-time edit" {...editTotalTime}/>
          ) : (
            <span>Total time: {totalTime}</span>
          )}
        </div>
        <ul className="recipe-card__ingredients">
          {ingredients.length > 0 &&
            ingredients.map((ingredient) => (
              <li className="recipe-card__ingredient" key={ingredient.title}>
                <Ingredient {...ingredient} />
              </li>
            ))}
        </ul>
        <ul className="recipe-card__steps">
          {steps.length > 0 &&
            steps.map((step) => (
              <li className="recipe-card__step" key={step}>
                {step}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
