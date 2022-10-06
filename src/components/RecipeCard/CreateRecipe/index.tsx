import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import useInput from '../../../hooks/useInput'
import Ingredients from '../Ingredients'
import Ingredient from '../Ingredients/Ingredient'

// type Dispatch<A> = (value: A) => void
// type SetStateAction<S> = S | ((prevState: S) => S)
// interface Step {
//   value: string | number
//   onChange: (e: any) => void
//   setValue: Dispatch<SetStateAction<string | number>>
// }
// interface UseInput {
//   value: string | number
//   onChange: (e: any) => void
//   setValue: Dispatch<SetStateAction<string | number>>
// }
// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Ingredient {
  title: string
  image: string
  quantity: string
  measure: string
  weight: string
}
// interface UseInputIngredient {
//   title: UseInput
//   image: UseInput
//   quantity: UseInput
//   measure: UseInput
//   weight: number
// }
// interface IngredientState {
//   initialState: Ingredient
//   onChange: (e: any) => void
//   setValue: Dispatch<SetStateAction<string | number | Ingredient>>
// }
// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Ingredients {
  [index: number]: Ingredient
}
export default function СreateRecipe () {
  const currentIngredient: Ingredient = {
    title: '',
    image: '',
    quantity: '',
    measure: '',
    weight: ''
  }
  const title = useInput('')
  const image = useInput('')
  const weight = useInput()
  const totalTime = useInput()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ingredient, setIngredient] = useState(currentIngredient)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const ingredientTitle = useInput('')
  const ingredientImage = useInput('')
  // const ingredientWeight = useInput()
  const ingredientQuantity = useInput()
  const ingredientMeasure = useInput()
  const ingredientWeight = useInput()
  const step: any = useInput('')
  const [steps, setSteps] = useState<string[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [recipe, setRecipe] = useState({})
  const { addMyRecipe, setMyRecipes } = useActions()

  const addStep = () => {
    setSteps(steps.concat([step.value]))
    step.setValue('')
    // console.log("steps", steps)
  }

  const addIngredient = () => {
    const ingredient: Ingredient = {
      title: ingredientTitle.value as string,
      image: ingredientImage.value as string,
      quantity: ingredientQuantity.value as string,
      measure: ingredientMeasure.value as string,
      weight: ingredientWeight.value as string
    }
    setIngredients(ingredients.concat([ingredient]))
    ingredientTitle.setValue('')
    ingredientImage.setValue('')
    ingredientQuantity.setValue('')
    ingredientMeasure.setValue('')
    ingredientWeight.setValue('')
    console.log('ingredients', ingredients)
  }
  const createRecipe = () => {
    const item = {
      title: title.value,
      image: image.value,
      weight: weight.value,
      totalTime: totalTime.value,
      ingredients,
      steps
    }
    setRecipe(item)
    addMyRecipe(item)
    title.setValue('')
    image.setValue('')
    weight.setValue('')
    totalTime.setValue('')
    setIngredients([])
    setSteps([])
  }

  useEffect(() => {
    setMyRecipes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="create-recipe">
      <h2 className="create-recipe__header">Сreate recipe</h2>
      <div className="create-recipe__body">
        <h4>Recipe description</h4>
        <div className="create-recipe__body-title">
          <input {...title} placeholder="Title" />
        </div>
        <div className="create-recipe__body-image">
          <input {...image} placeholder="Image URL" />
        </div>
        <div className="create-recipe__body-weight">
          <input {...weight} placeholder="Weight" type="number" />
        </div>
        <div className="create-recipe__body-total-time">
          <input {...totalTime} placeholder="Total time" type="number" />
        </div>
        <div className="create-recipe__body-create-ingredients">
          <h4>Ingredient description</h4>
          <button onClick={addIngredient} className="create-recipe__ingredient-button">+ Ingredient</button>
          <div className="create-recipe__ingredient-inputs">
          <input {...ingredientTitle} placeholder="Title" type="text" />
          <input {...ingredientImage} placeholder="Image URL" type="text" />
          <input {...ingredientQuantity} placeholder="Quantity" type="number" />
          <input {...ingredientMeasure} placeholder="Measure" type="text" />
          <input {...ingredientWeight} placeholder="Weight" type="number" />
          </div>

        </div>
        <section>
          <Ingredients ingredients={ingredients}/>
          <ul>
            {}
          </ul>
        </section>
        <div className="create-recipe__body-steps">
          <button onClick={addStep}>+ Step</button>
          <div className="create-recipe__body-steps-input">
            <textarea {...step} placeholder="Describe step"></textarea>
          </div>
          <ul className="steps row">
            {steps.length > 0 &&
              steps.map((step, index) => (
                <li className="step" key={index}>
                  {step}
                </li>
              ))}
          </ul>
        </div>
        <button onClick={createRecipe}>Create recipe</button>
      </div>
    </div>
  )
}
