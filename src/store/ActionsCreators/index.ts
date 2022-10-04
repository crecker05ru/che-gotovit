import * as recipesActionCreators from './recipes'
import * as myRecipesActionCreators from './myRecipes'
import * as myFavoritesActionCreators from './myFavorites'

export default {
  ...recipesActionCreators,
  ...myRecipesActionCreators,
  ...myFavoritesActionCreators
}
