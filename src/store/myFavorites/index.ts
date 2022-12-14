import { createSlice } from '@reduxjs/toolkit'
import { RecipeInfo } from '../../types/recipes'

export interface MyFavoritesState {
  myFavorites: RecipeInfo[]
  status: 'idle' | 'loading' | 'failed'
}

const updateMyFavoritesState = (state: any) => {
  localStorage.setItem('myFavorites', JSON.stringify(state.myFavorites))
  const myFavorites = localStorage.getItem('myFavorites')
  const parsedMyFavorites = JSON.parse(myFavorites as string)
  state.myFavorites = parsedMyFavorites
}
const initialState: MyFavoritesState = {
  myFavorites: [],
  status: 'idle'
}

export const myFavoritesSlice = createSlice({
  name: 'myFavorites',
  initialState,
  reducers: {
    setMyFavorites: (state) => {
      if (localStorage.getItem('myFavorites') == null) {
        localStorage.setItem('myFavorites', JSON.stringify(state.myFavorites))
      }
      const myFavorites = localStorage.getItem('myFavorites')
      console.log('myFavorites', myFavorites)
      console.log((JSON.parse(myFavorites as string)))
      const parsedMyFavorites = JSON.parse(myFavorites as string)
      state.myFavorites = parsedMyFavorites
    },
    addToMyFavorites: (state, action) => {
      state.myFavorites.push(action.payload)
      updateMyFavoritesState(state)
    },
    deleteFromMyFavorites: (state, action) => {
      state.myFavorites = state.myFavorites.filter(favorite => favorite.label !== action.payload.label)
    }
  }
})

export const { setMyFavorites, addToMyFavorites, deleteFromMyFavorites } = myFavoritesSlice.actions
export default myFavoritesSlice.reducer
