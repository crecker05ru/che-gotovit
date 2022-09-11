export interface Recipe {
    recipe: RecipeInfo
}
export interface RecipeInfo {
    uri: string
    label: string
    image: string
    source: string
    url: string
    shareAs: string
    yield: number
    dietLabels: [string]
    healthLabels: [string]
    cautions: [string]
    ingredientLines: [string]
    ingridients: [Ingredients]
    calories: number
    totalWeight: number
    totalTime: number
    cuisineType: [string]
    mealType: [string]
    dishType: [string]
    totalNutrients: {}
    totalDaily: {}
    digest: [Digest]
}
export interface Ingredients {
    text: string
    quantity: number
    measure: string
    food: string
    weight: number
    foodCategory: string
    image: string


}
export interface Digest {
    label: string
    tag: string
    schemaOrgTag: string
    total: number
    hasRDI: boolean
    daily: number
    unit: string
    sub: [Sub]


}
export interface Sub {
    label: string
    tag: string
    schemaOrgTag: string
    total: number
    hasRDI: boolean
    daily: number
    unit: string
}