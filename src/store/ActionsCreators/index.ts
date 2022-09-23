import * as recipesActionCreators from "./recipes";
import * as myRecipesActionCreators from './myRecipes'

export default {
    ...recipesActionCreators,
    ...myRecipesActionCreators 
}