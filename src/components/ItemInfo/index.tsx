import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useAppSelector } from "../../store/hooks"
import { RecipeInfo, Recipe } from "../../types/recipes"

const colorsMap = {
  "SUGAR.added": "",
  CA: "",
  "CHOCDF.net": "#00ff5e",
  CHOCDF: "#33ff7e",
  CHOLE: "",
  ENERC_KCAL: "#0061ff",
  FAMS: "",
  FAPU: "",
  FASAT: "",
  FATRN: "",
  FIBTG: "",
  FOLDFE: "",
  FOLFD: "",
  FOLAC: "",
  FE: "",
  MG: "",
  NIA: "",
  P: "",
  K: "",
  PROCNT: "#ff0400",
  RIBF: "",
  NA: "",
  "Sugar.alcohol": "",
  SUGAR: "",
  THIA: "",
  FAT: "#ffd000",
  VITA_RAE: "",
  VITB12: "",
  VITB6A: "",
  VITC: "",
  VITD: "",
  TOCPHA: "",
  VITK1: "",
  WATER: "#99c2ff",
  ZN: "#00cc00",
}

interface ItemInfo {
  info: Recipe
  closeInfoCallback: () => void
}

interface totalNutrients {
  label: string
  quantity: number
  unit: string
}
interface totalNutrientsArr {
  0: string
  1: totalNutrients
}

export default function ItemInfo({ info, closeInfoCallback }: ItemInfo) {
  const params = useParams()
  const { recipes } = useAppSelector((state) => state.recipes)

  const totalNutrientsArr = React.useMemo(() => {
    return Object.entries(info.recipe.totalNutrients).map((item: any) => {
      return (
        <li className="total-nutrients__item">
          <div className="total-nutrients__title">{item[0]}</div>
          <div className="total-nutrients__label">{item[1].label}</div>
          <div className="total-nutrients__quantity">{item[1].quantity}</div>
          <div className="total-nutrients__unit">{item[1].unit}</div>
        </li>
      )
    })
  }, [info.recipe.totalNutrients])

  const totalDailyArr = React.useMemo(() => {
    return Object.entries(info.recipe.totalDaily).map((item: any) => {
      return (
        <li className="total-daily__item">
          <div className="total-daily__title">{item[0]}</div>
          <div className="total-daily__label">{item[1].label}</div>
          <div className="total-daily__quantity">{item[1].quantity}</div>
          <div className="total-daily__unit">{item[1].unit}</div>
        </li>
      )
    })
  }, [info.recipe.totalDaily])

  useEffect(() => {
    console.log("info.recipe.digest", info.recipe.digest)
    console.log("totalNutrientsArr", totalNutrientsArr)
  }, [])
  return (
    <article className="item-info">
      <div className="item-info__back-button" onClick={closeInfoCallback}>
        Back
      </div>
      <div className="item-info__header">
        <h2 className="item-info__header-title">{info.recipe.label}</h2>
        <img src={info.recipe.image} alt={info.recipe.label}></img>
      </div>
      <div className="item-info__body">
        <h4>Diet labels</h4>

        <ul className="item-info__diet-labels item-info__list">
          {info.recipe.dietLabels.length &&
            info.recipe.dietLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <ul className="item-info__health-labels item-info__list">
          {info.recipe.healthLabels.length &&
            info.recipe.healthLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <ul className="item-info__cautions item-info__list">
          {info.recipe.cautions.length &&
            info.recipe.cautions.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        {/* <ul className="item-info__ingredient-lines item-info__list">
          {info.recipe.ingredientLines.length &&
            info.recipe.ingredientLines.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul> */}
        <ul className="item-info__ingredients item-info__list">
          {info.recipe.ingredients.length &&
            info.recipe.ingredients.map((item: any) => (
              <li key={item} className="ingredient">
                <article className="ingredient__item">
                  <div className="ingredient__text">
                    Ingredient: <span>{item.text}</span>
                  </div>
                  {/* <div className="ingredient__quantity">Quantity: <span>{item.quantity}</span></div>
                  <div className="ingredient__measure">Measure: <span>{item.measure}</span></div>
                  <div className="ingredient__food">Food: <span>{item.food}</span></div> */}
                  <div className="ingredient__weight">
                    Weight: <span>{item.weight}</span>
                  </div>
                  {/* <div className="ingredient__food-category">
                  Food category: <span>{item.foodCategory}</span>
                  </div> */}
                  <img
                    src={item.image}
                    alt={item.text}
                    className="ingredient__image"
                  />
                </article>
              </li>
            ))}
        </ul>
        <ul className="item-info__main row">
          <li className="item-info__calories">
            <span>Calories:</span> {info.recipe.calories}
          </li>
          <li className="item-info____total-weight">
            <span>Total weight:</span>
            {info.recipe.totalWeight}
          </li>
          <li className="item-info__total-time">
            <span>Total time:</span>
            {info.recipe.totalTime}
          </li>
        </ul>
        <div className="item-info__type-tags row">
          <ul className="item-info__cuisine-type item-info__list">
            {info.recipe.cuisineType.length &&
              info.recipe.cuisineType.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ul className="item-info__meal-type">
            {info.recipe.mealType &&
              info.recipe.mealType.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ul className="item-info__dish-type">
            {info.recipe.dishType &&
              info.recipe.dishType.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="item-info__total-nutrients ">
          <ul className="total-nutrients item-info__list">{totalNutrientsArr}</ul>
        </div>

        <div className="item-info__total-daily">total-daily
        <ul className="total-daily item-info__list">
          {totalDailyArr}
        </ul>
        </div>
        <div className="item-info__digest">
          <ul className="digest item-info__list">
            {info.recipe.digest.length &&
              info.recipe.digest.map((item) => (
                <li key={item.label} className="digest__item">
                  <div className="digest__label">{item.label}</div>
                  <div className="digest__tag">{item.tag}</div>
                  <div className="digest__schema">{item.schemaOrgTag}</div>
                  <div className="digest__total">{item.total}</div>
                  <div className="digest__rdi">{item.hasRDI}</div>
                  <div className="digest__daily">{item.daily}</div>
                  <div className="digest__unit">{item.unit}</div>
                  <ul className="digest__sub item-info__list">
                    {item.sub &&
                      item.sub.map((s) => (
                        <li key={s.label}>
                          <div className="sub__label">{s.label}</div>
                          <div className="sub__tag">{s.tag}</div>
                          <div className="sub__scheme">{s.schemaOrgTag}</div>
                          <div className="sub__total">{s.total}</div>
                          <div className="sub__rdi">{s.hasRDI}</div>
                          <div className="sub__daily">{s.daily}</div>
                          <div className="sub__unit">{s.unit}</div>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
