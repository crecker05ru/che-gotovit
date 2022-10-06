import React from 'react'
import { roundNumber } from '../../helpers/roundNumber'
import { RecipeInfo } from '../../types/recipes'

interface ColorsMap {
  [key: string]: string
}

const colorsMap: ColorsMap = {
  'SUGAR.added': '#ccffcc',
  CA: '#344c4c',
  'CHOCDF.net': '#00ff5e',
  CHOCDF: '#33ff7e',
  CHOLE: '#996600',
  ENERC_KCAL: '#0061ff',
  FAMS: '#ffc61a',
  FAPU: '#ffcc33',
  FASAT: '#ffc61a',
  FATRN: '#cc9900',
  FIBTG: '#006600',
  FOLDFE: '#00b300',
  FOLFD: '#008000',
  FOLAC: '#00e600',
  FE: '#e0e0eb',
  MG: '#e6ffe6',
  NIA: '#ffcce6',
  P: '#660033',
  K: '#7373a5',
  PROCNT: '#ff0400',
  RIBF: '#ff9933',
  NA: '#99b3ff',
  'Sugar.alcohol': '#990000',
  SUGAR: '#ccffcc',
  THIA: '#009900',
  FAT: '#ffd000',
  VITA_RAE: '#ff4d00',
  VITB12: '#b31919',
  VITB6A: '#983601',
  VITC: '#ffdd00',
  VITD: '#a6c5f7',
  TOCPHA: '#f0d000',
  VITK1: '#36ae1e',
  WATER: '#99c2ff',
  ZN: '#00cc00'
}

interface ItemInfo {
  info: RecipeInfo
  closeInfoCallback: () => void
}

// interface totalNutrients {
//   label: string
//   quantity: number
//   unit: string
// }
// interface totalNutrientsArr {
//   0: string
//   1: totalNutrients
// }

// interface Digest {
//   label: string
//   tag: string
//   schemaOrgTag: string
//   total: number
//   hasRDI: boolean
//   daily: number
//   unit: string
//   sub: []
// }

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function ItemInfo ({ info, closeInfoCallback }: ItemInfo) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalNutrientsArr = React.useMemo(() => {
    return Object.entries(info.totalNutrients).map((item: any) => {
      return (
        <li className="total-nutrients__item">
          <div className="total-nutrients__title">{item[0]}</div>
          <div className="total-nutrients__label">{item[1].label}</div>
          <div className="total-nutrients__quantity">{roundNumber(item[1].quantity, 1) }</div>
          <div className="total-nutrients__unit">{item[1].unit}</div>
        </li>
      )
    })
  }, [info.totalNutrients])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const totalDailyArr = React.useMemo(() => {
    return Object.entries(info.totalDaily).map((item: any) => {
      return (
        <li className="total-daily__item">
          <div className="total-daily__title">{item[0]}</div>
          <div className="total-daily__label">{item[1].label}</div>
          <div className="total-daily__quantity">{roundNumber(item[1].quantity, 1)}</div>
          <div className="total-daily__unit">{item[1].unit}</div>
        </li>
      )
    })
  }, [info.totalDaily])

  return (
    <article className="item-info">
      <div className="item-info__back-button" onClick={closeInfoCallback}>
        Back
      </div>
      <div className="item-info__header">
        <h2 className="item-info__header-title">{info.label}</h2>
        <img src={info.image} alt={info.label}></img>
      </div>
      <div className="item-info__body">
        <h4>Diet labels</h4>
        <ul className="item-info__diet-labels item-info__list">
          {info.dietLabels.length &&
            info.dietLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <h4>Health labels</h4>
        <ul className="item-info__health-labels item-info__list">
          {info.healthLabels.length &&
            info.healthLabels.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <h4>Cautions</h4>
        <ul className="item-info__cautions item-info__list">
          {info.cautions.length &&
            info.cautions.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <h4>Cuisine type</h4>
        <div className="item-info__type-tags row">
          <ul className="item-info__cuisine-type item-info__list">
            {info.cuisineType.length &&
              info.cuisineType.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ul className="item-info__meal-type">
            {info.mealType &&
              info.mealType.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <ul className="item-info__dish-type">
            {info.dishType &&
              info.dishType.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {/* <ul className="item-info__ingredient-lines item-info__list">
          {info.recipe.ingredientLines.length &&
            info.recipe.ingredientLines.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
        </ul> */}
        <ul className="item-info__ingredients item-info__list">
          {info.ingredients.length &&
            info.ingredients.map((item: any) => (
              <li key={item} className="item-info__ingredient">
                <article className="item-info__ingredient__item">
                  <div className="item-info__ingredient__text">
                    Ingredient: <span>{item.text}</span>
                  </div>
                  {/* <div className="ingredient__quantity">Quantity: <span>{item.quantity}</span></div>
                  <div className="ingredient__measure">Measure: <span>{item.measure}</span></div>
                  <div className="ingredient__food">Food: <span>{item.food}</span></div> */}
                  <div className="item-info__ingredient__weight">
                    Weight: <span>{roundNumber(item.weight, 1)}</span>
                  </div>
                  {/* <div className="ingredient__food-category">
                  Food category: <span>{item.foodCategory}</span>
                  </div> */}
                  <img
                    src={item.image}
                    alt={item.text}
                    className="item-info__ingredient__image"
                  />
                </article>
              </li>
            ))}
        </ul>
        <ul className="item-info__main row gap-10">
          <li className="item-info__calories">
            <span>Calories:</span> {roundNumber(info.calories, 1)}
          </li>
          <li className="item-info____total-weight">
            <span>Total weight:</span>
            {roundNumber(info.totalWeight, 1)}
          </li>
          <li className="item-info__total-time">
            <span>Total time:</span>
            {info.totalTime}
          </li>
        </ul>

        {/* <div className="item-info__total-nutrients ">
          <ul className="total-nutrients item-info__list">
            {totalNutrientsArr}
            </ul>
        </div> */}

        {/* <div className="item-info__total-daily">total-daily
        <ul className="total-daily item-info__list">
          {totalDailyArr}
        </ul>
        </div> */}
        <div className="item-info__digest">
          <ul className="digest item-info__list">
            {info.digest.length &&
              info.digest.map((item) => (
                <li key={item.label} className="digest__item">
                  <ul className="digest__main item-info__list" style={{ backgroundColor: colorsMap[item.tag] }}>
                  <li className="digest__label">{item.label}</li>
                  {/* <div className="digest__tag">{item.tag}</div> */}
                  {/* <div className="digest__schema">{item.schemaOrgTag}</div> */}
                  <li className="digest__total">Total: {roundNumber(item.total, 1) }</li>
                  <li className="digest__rdi">{item.hasRDI}</li>
                  <li className="digest__daily">Daily: {roundNumber(item.daily, 1)} <span className="digest__unit">{item.unit}</span></li>
                  </ul>
                  <ul className="digest__sub item-info__list">
                    {item.sub &&
                      item.sub.map((s) => (
                        <li className="sub" key={s.label}>
                          <div className="sub__label">{s.label}</div>
                          {/* <div className="sub__tag">{s.tag}</div> */}
                          {/* <div className="sub__scheme">{s.schemaOrgTag}</div> */}
                          <div className="sub__total">{roundNumber(s.total, 1) }</div>
                          {/* <div className="sub__rdi">{s.hasRDI}</div> */}
                          <div className="sub__daily">{roundNumber(s.daily, 1) }</div>
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
