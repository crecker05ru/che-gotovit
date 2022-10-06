import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import СreateRecipe from '../../components/RecipeCard/CreateRecipe'
import RecipeCard from '../../components/RecipeCard'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/store'

export default function MyRecipes () {
  const { myRecipes } = useSelector((state: RootState) => state.myRecipes)
  const { setMyRecipes } = useActions()

  useEffect(() => {
    setMyRecipes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="my-recipes wrapper">
      <h1>MyRecipes</h1>
      <div className="my-recipes__body">
        <div className="my-recipes__create-recipe">
          <СreateRecipe />
        </div>
        <div className="my-recipes__recipe">
          <ul className="my-recipes__recipe-lists row gap-10">
            {myRecipes.length > 0 &&
              myRecipes.map((myRecipe, index) => (
                <li className="my-recipes__recipe-item" key={myRecipe.title}>
                  <RecipeCard {...myRecipe} recipeId={index} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
