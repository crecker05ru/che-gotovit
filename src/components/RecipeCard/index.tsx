import React, { useEffect, useState } from "react"
import { useActions } from "../../hooks/useActions"
import useInput from "../../hooks/useInput"
import Steps from "./Steps"
import { MyRecipe } from "../../types/myRecipes"
import { EditableDIV } from "../EditableDIV"
import Ingredient from "./Ingredients/Ingredient"
import Step from "./Steps/Step"
import Ingredients from "./Ingredients"

export default function RecipeCard({
  title,
  image,
  ingredients,
  weight,
  totalTime,
  steps,
  quantity,
  measure,
  recipeId,
}: MyRecipe) {
  const [isEdit, setIsEdit] = useState(false)
  const editTitle = useInput(title)
  const editImage = useInput(image)
  const [editIngredients, setEditIngredients] = useState(ingredients)
  const editWeight = useInput(weight)
  const editTotalTime = useInput(totalTime)
  const [editSteps, setEditSteps] = useState(steps)
  // const editStep = useInput()
  const editQuantity = useInput(quantity)
  const editMeasure = useInput(measure)
  const [editedRecipe, setEditedRecipe] = useState({})
  const { editMyRecipe } = useActions()

  // const updateSteps = (id: number, step: string) => {
  //   // let newSteps = steps.map((item, index) => index === id ? item = step : item)
  //   // let newSteps = editSteps.map((item, index) => index === id ? item = step : item)
  //   let copyArr = [...editSteps]
  //   copyArr[id] = step
  //   if(isEdit){
  //     setEditSteps(copyArr)
  //   }

  //   // setEditSteps(newSteps)
  //   // if(isEdit === false) {
  //   //   let newSteps = steps.map((item, index) => index === id ? item = step : item)
  //   //   setEditSteps(newSteps)
  //   // }
  // }
  const setSteps = (steps: any) => {
    setEditSteps(steps)
  }
  const setIngredients = (ingredients: any) => {
    setEditIngredients(ingredients)
  }
  const editModeHandler = () => {
    setIsEdit(true)
  }
  const editRecipeHandler = () => {
    setTimeout(() => {
      let item = {
        title,
        image: editImage.value,
        weight: editWeight.value,
        totalTime: editTotalTime.value,
        ingredients: editIngredients,
        steps: editSteps,
      }
      setEditedRecipe(item)
      editMyRecipe(item)
      setIsEdit(false)
      // console.log("item", item)
      // console.log("editedRecipe", editedRecipe)
      // console.log("editImage.value", editImage.value)
    }, 0)
  }

  useEffect(() => {
    // console.log("ReceipeCard component")
  }, [])
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
            <input className="edit-recipe__image edit" {...editImage} />
          ) : (
            <img src={image} alt={title} className="recipe-card__image"></img>
          )}
        </div>
        <div className="recipe-card__weight">
          {isEdit ? (
            // <EditableDIV className="edit-recipe__weight edit" {...editWeight} />
            <input className="edit-recipe__weight edit" {...editWeight} />
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
            <input
              className="edit-recipe__total-time edit"
              {...editTotalTime}
            />
          ) : (
            <span>Total time: {totalTime}</span>
          )}
        </div>
        <h4>Ingredients:</h4>
        {/* <ul className="recipe-card__ingredients">
          {ingredients.length > 0 &&
            ingredients.map((ingredient,index) => (
              <li className="recipe-card__ingredient" key={ingredient.title}>
                <Ingredient {...ingredient} id={index} recipeId={recipeId} isEdit={isEdit} updateIngredient={updateIngredient}
                 />
              </li>
            ))}
        </ul> */}
        <Ingredients
          ingredients={ingredients}
          isEdit={isEdit}
          setIngredients={setIngredients}
        />
        <h4>Steps:</h4>
        <Steps steps={steps} isEdit={isEdit} setSteps={setSteps} />
      </div>
    </div>
  )
}
