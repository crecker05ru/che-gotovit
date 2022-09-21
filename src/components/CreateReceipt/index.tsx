import React, { useState } from "react"
import { setConstantValue } from "typescript"
import { roundNumber } from "../../helpers/roundNumber"
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
  quantity: number
  measure: number
  weight: number
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
    quantity: 0,
    measure: 0,
    weight: 0,
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
  const step: any = useInput("")
  const [steps, setSteps] = useState<string[]>([""])
  const [receipt, setReceipt] = useState({})

  const addStep = () => {
    setSteps(steps.concat([step.value]))
    console.log("steps", steps)
  }

  const createIngredient = () => {
    let ingredient: Ingredient = {
      title: ingredientTitle.value as string,
      image: ingredientImage.value as string,
      quantity: ingredientQuantity.value as number,
      measure: ingredientMeasure.value as number,
      weight: roundNumber(
        Number(ingredientQuantity) * Number(ingredientMeasure),
        1
      ),
    }
    setIngredient(ingredient)
  }

  const addIngredient = () => setIngredients(ingredients.concat([ingredient]))
  const createReceipt = () =>
    setReceipt({
      title: title.value,
      image: image.value,
      weight: weight.value,
      totalTime: totalTime.value,
      ingredients,
      steps,
    })
  return (
    <div className="create-receipt">
      <h2 className="create-receipt__header">Сreate receipt</h2>
      <div className="create-receipt__body">
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
          <input {...ingredientTitle} placeholder="Title" />
          <input {...ingredientImage} placeholder="Image URL" />
          <input {...ingredientQuantity} placeholder="Quantity" type="number" />
          <input {...ingredientMeasure} placeholder="Measure" type="number" />
          <span>Weight: {ingredient.weight}</span>
          <ul className="create-ingredients">
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
          <button onClick={addIngredient}>+ Ingredient</button>
        </div>
        <div className="create-receipt__body-steps">
          <textarea {...step} placeholder="Steps"></textarea>
          <ul className="steps">
            {steps.length > 0 &&
              steps.map((step) => (
                <li className="step" key={step}>
                  {step}
                </li>
              ))}
          </ul>
          <button onClick={addStep}>+ Step</button>
        </div>
        <button onClick={createReceipt}>Create</button>
      </div>
    </div>
  )
}
