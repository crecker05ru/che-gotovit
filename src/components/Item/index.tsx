import React, { useEffect, useState } from 'react'
import { roundNumber } from '../../helpers/roundNumber'
import { useActions } from '../../hooks/useActions'
import FlipCard from '../FlipCard'
import ProcentCircle from '../ProcentCircle'
import Favorite from '../Favorite'

export default function Item ({ data, openInfoCallback }: any) {
  const { addToMyFavorites, deleteFromMyFavorites } = useActions()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const favoriteHandler = () => {
    if (isFavorite) {
      setIsFavorite(false)
      deleteFromMyFavorites(data)
    } else {
      setIsFavorite(true)
      addToMyFavorites(data)
      console.log('data', data)
      console.log('isFavorite', isFavorite)
    }
  }
  useEffect(() => {
    // console.log('data',data)
    // console.log(',recipe)
  }, [])
  return (
    <div className="item">
      <FlipCard isFlipped={isFlipped}>
        <div
          className="item__content"
          onDoubleClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="item__image">
            <img src={data.image} alt="" />
          </div>
          <h3
            className="item__title"
            onClick={() => openInfoCallback(data.label)}
          >
            {data.label}
          </h3>
          <div className="item__description">
            <div className="item__total-time row gap-10">
              <div className="item__total-time-icon"></div>
              <div className="item__total-time-value">
                {data.totalTime} min
              </div>
              <div className="item__favorite-icon" onClick={favoriteHandler}><Favorite fill={isFavorite}/></div>
            </div>
            <h4>Nutrition</h4>
            <ul className="item__nutrients row">
              <li className="item__nutrient-item">
                <div className="item__nutrient-energy">

                  <div className="item__energy-quantity">
                  <div className="item__energy-icon"></div>
                    {roundNumber(
                      data.totalNutrients.ENERC_KCAL.quantity,
                      2
                    )}{' '}
                    {data.totalNutrients.ENERC_KCAL.unit}
                  </div>
                </div>
                <div className="item__energy-daily">
                    <div className="item__energy-daily-procent procent-icon">
                      <ProcentCircle
                        procent={roundNumber(
                          data.totalDaily.ENERC_KCAL.quantity,
                          1
                        )}
                        stroke={'#0061ff'}
                      />
                    </div>
                </div>
              </li>
              <li className="item__nutrient-item">
                <div className="item__nutrient-fat">
                   {' '}
                  <span>{data.totalNutrients.FAT.label}:</span>
                  {roundNumber(
                    data.totalNutrients.FAT.quantity,
                    2
                  )} {' '}
                  {data.totalNutrients.FAT.unit}
                </div>
                <div className="item__fat-daily">
                  <div className="item__nutrient-fat-procent procent-icon">
                    <ProcentCircle
                      procent={roundNumber(
                        data.totalDaily.FAT.quantity,
                        1
                      )}
                      stroke={'#ffd000'}
                    />
                  </div>
                </div>
              </li>

              <li className="item__nutrient-item">
                <div className="item__nutrient-protein">
                  <span>{data.totalNutrients.PROCNT.label}:</span>
                  {roundNumber(
                    data.totalNutrients.PROCNT.quantity,
                    2
                  )} {' '}
                  {data.totalNutrients.PROCNT.unit}
                </div>
                <div className="item__protein-daily">
                  <div className="item__protein-icon procent-icon">
                    <ProcentCircle
                      procent={roundNumber(
                        data.totalDaily.PROCNT.quantity,
                        2
                      )}
                      stroke={'#ff0400'}
                    />
                  </div>
                </div>
              </li>
              <li className="item__nutrient-item">
                <div className="item__nutrient-сarbohydrate">
                  <span>{data.totalNutrients.CHOCDF.label}:</span>
                  {roundNumber(
                    data.totalNutrients.CHOCDF.quantity,
                    2
                  )} {' '}
                  {data.totalNutrients.CHOCDF.unit}
                </div>
                <div className="item__сarbohydrate-daily">
                <div className="item__сarbohydrate-icon procent-icon">
                <ProcentCircle
                    procent={roundNumber(
                      data.totalDaily.CHOCDF.quantity,
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
            {data.ingredientLines.length &&
              data.ingredientLines.map((ingredient: string): any => (
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
