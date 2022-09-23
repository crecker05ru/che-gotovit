import React, { useState } from "react"
import { setConstantValue } from "typescript"
import { roundNumber } from "../../helpers/roundNumber"
import { useActions } from "../../hooks/useActions"
import useInput from "../../hooks/useInput"
import Ingredient from "../Ingredient"

type Dispatch<A> = (value: A) => void
type SetStateAction<S> = S | ((prevState: S) => S)
interface Step {
  value: string | number
  onChange: (e: any) => void
  setValue: Dispatch<SetStateAction<string | number>>
}
interface UseInput {
  value: string | number
  onChange: (e: any) => void
  setValue: Dispatch<SetStateAction<string | number>>
}
interface Ingredient {
  title: string
  image: string
  quantity: string
  measure: string
  weight: string
}
interface UseInputIngredient {
  title: UseInput
  image: UseInput
  quantity: UseInput
  measure: UseInput
  weight: number
}
interface IngredientState {
  initialState: Ingredient
  onChange: (e: any) => void
  setValue: Dispatch<SetStateAction<string | number | Ingredient>>
}
interface Ingredients {
  [index: number]: Ingredient
}
export default function СreateReceipt() {
  const currentIngredient: Ingredient = {
    title: "",
    image: "",
    quantity: '',
    measure: '',
    weight: '',
  }
  const title = useInput("")
  const image = useInput("")
  const weight = useInput()
  const totalTime = useInput()
  const [ingredient, setIngredient] = useState(currentIngredient)
  const [ingredients, setIngredients] = useState<Array<Ingredient>>([])
  const ingredientTitle = useInput("")
  const ingredientImage = useInput("")
  // const ingredientWeight = useInput()
  const ingredientQuantity = useInput()
  const ingredientMeasure = useInput()
  const ingredientWeight = useInput()
  const step: any = useInput("")
  const [steps, setSteps] = useState<string[]>([])
  const [receipt, setReceipt] = useState({})
  const {addMyRecipe} = useActions()

  const addStep = () => {
    setSteps(steps.concat([step.value]))
    console.log("steps", steps)
  }

  const addIngredient = () => {
    let ingredient: Ingredient = {
      title: ingredientTitle.value as string,
      image: ingredientImage.value as string,
      quantity: ingredientQuantity.value as string,
      measure: ingredientMeasure.value as string,
      weight: ingredientWeight.value as string
    }
    setIngredients(ingredients.concat([ingredient]))
    console.log('ingredients',ingredients)
  }
  const createReceipt = () => {
    let item = {
      title: title.value,
      image: image.value,
      weight: weight.value,
      totalTime: totalTime.value,
      ingredients,
      steps,
    }
    setReceipt(item)
    addMyRecipe(item)
  }
    
  return (
    <div className="create-receipt">
      <h2 className="create-receipt__header">Сreate receipt</h2>
      <div className="create-receipt__body">
        <h4>Receipt description</h4>
        <div className="create-receipt__body-title">
          <input {...title} placeholder="Title" />
        </div>
        <div className="create-receipt__body-image">
          <input {...image} placeholder="Image URL" />
        </div>
        <div className="create-receipt__body-weight">
          <input {...weight} placeholder="Weight" type="number" />
        </div>
        <div className="create-receipt__body-total-time">
          <input {...totalTime} placeholder="Total time" type="number" />
        </div>
        <div className="create-receipt__body-create-ingredients">
        <h4>Ingredient description</h4>
        <button onClick={addIngredient}>+ Ingredient</button>
          <input {...ingredientTitle} placeholder="Title" type="text"/>
          <input {...ingredientImage} placeholder="Image URL" type="text" />
          <input {...ingredientQuantity} placeholder="Quantity" type="number" />
          <input {...ingredientMeasure} placeholder="Measure" type="text" />
          <input {...ingredientWeight} placeholder="Weight" type="number" />
          <ul className="create-ingredients row">
            {ingredients.length > 0 &&
              ingredients.map((ingredient) => (
                <li className="create-ingredient" key={ingredient.title}>
                  <Ingredient
                    title={ingredient.title}
                    image={ingredient.image}
                    weight={ingredient.weight}
                    quantity={ingredient.quantity}
                    measure={ingredient.measure}
                  />
                </li>
              ))}
          </ul>
          
        </div>
        <div className="create-receipt__body-steps">
        <button onClick={addStep}>+ Step</button>
          <div className="create-receipt__body-steps-input">
          <textarea {...step} placeholder="Steps"></textarea>
          </div>
          <ul className="steps row">
            {steps.length > 0 &&
              steps.map((step) => (
                <li className="step" key={step}>
                  {step}
                </li>
              ))}
          </ul>
        </div>
        <button onClick={createReceipt}>Create receipt</button>
      </div>
    </div>
  )
}
