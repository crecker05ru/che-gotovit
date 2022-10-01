import React, { useEffect, useState } from "react"
import { roundNumber } from "../../../../helpers/roundNumber"
import { useActions } from "../../../../hooks/useActions"
import useInput from "../../../../hooks/useInput"

export default function Ingredient({
  title = "",
  text = "",
  weight = "",
  image = "",
  quantity = "",
  measure = "",
  id,
  isEdit,
  updateIngredient,
}: any) {
  // const [isEdit, setIsEdit] = useState(false)
  // const editTitle = useInput(title)
  const editText = useInput(text)
  const editWeight = useInput(weight)
  const editImage = useInput(image)
  const editQuantity = useInput(quantity)
  const editMeasure = useInput(measure)
  // const {updateIngredient} = useActions()

  // const editModeHandler = () => {
  //   setIsEdit(true)
  // }
  const editIngredientHandler = () => {
    let item = {
      id,
      title,
      text: editText.value,
      weight: editWeight.value,
      image: editImage.value,
      quantity: editQuantity.value,
      measure: editMeasure.value,
    }
    // setIsEdit(false)
    // updateIngredient(item)
    updateIngredient(id, item)
  }
  useEffect(() => {
    let item = {
      // id,
      title,
      text: editText.value,
      weight: editWeight.value,
      image: editImage.value,
      quantity: editQuantity.value,
      measure: editMeasure.value,
    }
    updateIngredient(id, item)
  }, [
    editText.value,
    editWeight.value,
    editImage.value,
    editQuantity.value,
    editMeasure.value,
  ])
  return (
    <div className="ingredient">
      <article className="ingredient__item">
        {/* {isEdit ? <div onClick={editIngredientHandler} className="ingredient__icon edit-done-icon-s"></div> 
        :<div onClick={editModeHandler} className="ingredient__icon edit-icon-s"></div>} */}
        <div className="ingredient__title">
          Ingredient: <span>{title}</span>
        </div>
        {/* <div className="ingredient__text">
            text: <span>{text}</span>
          </div> */}
        <div className="ingredient__quantity">
          Quantity:{" "}
          {isEdit ? (
            <input className="edit-ingredient" {...editQuantity} />
          ) : (
            <span>{quantity}</span>
          )}
        </div>
        <div className="ingredient__measure">
          Measure:{" "}
          {isEdit ? (
            <input className="edit-ingredient" {...editMeasure} />
          ) : (
            <span>{measure}</span>
          )}
        </div>
        {/* <div className="ingredient__food">Food: <span>{food}</span></div> */}
        <div className="ingredient__weight">
          Weight:{" "}
          {isEdit ? (
            <input className="edit-ingredient" {...editWeight} />
          ) : (
            <span>{weight}</span>
          )}
        </div>
        {/* <div className="ingredient__food-category">
            Food category: <span>{item.foodCategory}</span>
            </div> */}
        <div>
          {isEdit ? (
            <input className="edit-ingredient" {...editImage} />
          ) : (
            <img className="ingredient__image" src={image} alt={text} />
          )}
        </div>
      </article>
    </div>
  )
}
