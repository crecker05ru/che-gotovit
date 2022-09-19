import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { roundNumber } from "../../helpers/roundNumber"
import FlipCard from "../FlipCard"
import ProcentCircle from "../ProcentCircle"

export default function Item({ data, openInfoCallback }: any) {
  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()
  console.log("openInfoCallback", openInfoCallback)

  const navigateToItem = () => {
    navigate(`item-info/${data.recipe.label}`)
  }

  return (
    <div className="item">
      <FlipCard isFlipped={isFlipped}>
        <div
          className="item__content"
          onDoubleClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="item__image">
            <img src={data.recipe.image} alt="" />
          </div>
          <h3
            className="item__title"
            onClick={() => openInfoCallback(data.recipe.label)}
          >
            {data.recipe.label}
          </h3>
          <div className="item__description">
            <div className="item__total-time row gap-10">
              <div className="item__total-time-icon"></div>
              <div className="item__total-time-value">
                {data.recipe.totalTime} min
              </div>
            </div>
            <h4>Nutrition</h4>
            <ul className="item__nutrients row">
              <li className="item__nutrient-item">
                <div className="item__nutrient-energy">
                  
                  <div className="item__energy-quantity">
                  <div className="item__energy-icon"></div>
                    {roundNumber(
                      data.recipe.totalNutrients["ENERC_KCAL"].quantity,
                      2
                    )}{" "}
                    {data.recipe.totalNutrients["ENERC_KCAL"].unit}
                  </div>
                </div>
                <div className="item__energy-daily">
                    <div className="item__energy-daily-procent procent-icon">
                      <ProcentCircle
                        procent={roundNumber(
                          data.recipe.totalDaily["ENERC_KCAL"].quantity,
                          1
                        )}
                        stroke={"#0061ff"}
                      />
                    </div>
                </div>
              </li>
              <li className="item__nutrient-item">
                <div className="item__nutrient-fat">
                   {" "}
                  <span>{data.recipe.totalNutrients["FAT"].label}:</span>
                  {roundNumber(
                    data.recipe.totalNutrients["FAT"].quantity,
                    2
                  )} {" "}
                  {data.recipe.totalNutrients["FAT"].unit}
                </div>
                <div className="item__fat-daily">
                  <div className="item__nutrient-fat-procent procent-icon">
                    <ProcentCircle
                      procent={roundNumber(
                        data.recipe.totalDaily["FAT"].quantity,
                        1
                      )}
                      stroke={"#ffd000"}
                    />
                  </div>
                </div>
              </li>

              <li className="item__nutrient-item">
                <div className="item__nutrient-protein">
                  <span>{data.recipe.totalNutrients["PROCNT"].label}:</span>
                  {roundNumber(
                    data.recipe.totalNutrients["PROCNT"].quantity,
                    2
                  )} {" "}
                  {data.recipe.totalNutrients["PROCNT"].unit}
                </div>
                <div className="item__protein-daily">
                  <div className="item__protein-icon procent-icon">
                    <ProcentCircle
                      procent={roundNumber(
                        data.recipe.totalDaily["PROCNT"].quantity,
                        2
                      )}
                      stroke={"#ff0400"}
                    />
                  </div>
                </div>
              </li>
              <li className="item__nutrient-item">
                <div className="item__nutrient-сarbohydrate">
                  <span>{data.recipe.totalNutrients["CHOCDF"].label}:</span>
                  {roundNumber(
                    data.recipe.totalNutrients["CHOCDF"].quantity,
                    2
                  )} {" "}
                  {data.recipe.totalNutrients["CHOCDF"].unit}
                </div>
                <div className="item__сarbohydrate-daily">
                <div className="item__сarbohydrate-icon procent-icon">
                <ProcentCircle
                    procent={roundNumber(
                      data.recipe.totalDaily["CHOCDF"].quantity,
                      1
                    )}
                  />
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="item__content"
          onMouseLeave={() => setIsFlipped(!isFlipped)}
        >
          Ingredients:
          <ol className="item__ingredients">
            {data.recipe.ingredientLines.length &&
              data.recipe.ingredientLines.map((ingredient: string): any => (
                <li className="item__ingredient" key={ingredient}>
                  {ingredient}
                </li>
              ))}
          </ol>
        </div>
      </FlipCard>
    </div>
  )
}
