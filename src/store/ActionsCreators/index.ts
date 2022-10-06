import * as recipesActionCreators from './recipes'
import * as myRecipesActionCreators from './myRecipes'
import * as myFavoritesActionCreators from './myFavorites'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...recipesActionCreators,
  ...myRecipesActionCreators,
  ...myFavoritesActionCreators
}
