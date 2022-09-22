export interface MyRecipe {
  title: string
  image: string
  weight: string
  totalTime: number
  quantity: string
  measure: string
  ingredients: [Ingredient]
  steps: [string]
}
export interface Ingredient {
  title: string
  image: string
  quantity: string
  measure: string
  weight: string
}

export interface Ingredients {
  [index: number]: Ingredient
}
