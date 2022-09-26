import {MyRecipe} from '../../types/myRecipes'
import { http } from './../../api/http';
import { createSlice,createAsyncThunk,PayloadAction } from  '@reduxjs/toolkit'


export interface MyRecipesState {
    myRecipes: MyRecipe[]
    status: 'idle' | 'loading' | 'failed'
  }
const example = {
  title: 'Example My recipe cinobon',
  image: 'data:image/jpeg;base64,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',
  weight: '220',
  totalTime: 20,
  quantity: '2',
  measure: 'pcs',
  ingredients: [{
    title: 'cinnamon',
    image: 'data:image/jpeg;base64,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',
    quantity: '4',
    measure: 'pcs',
    weight: '25'
  }],
  steps: ['make dough','make a shape','bake 25 minutes']
}

const  updateMyRecipesState =  (state: any) => {
  localStorage.setItem('myRecipes', JSON.stringify(state.myRecipes))
  let myRecipes = localStorage.getItem('myRecipes')
  let parsedMyRecipe = JSON.parse( myRecipes as string)
  state.myRecipes = parsedMyRecipe
}
const initialState: MyRecipesState =  {
    myRecipes: [example],
    status: 'idle'
}
export const fetchMyRecipes = createAsyncThunk(
    'myRecipes/fetchMyRecipes',
    async (query: {url: string, options: {}}) => {
      const response = await http.get(query.url, {params: query.options});
      return response.data.hits;
    }
  );

  export const myRecipesSlice = createSlice({
    name: 'myRecipes',
    initialState,
    reducers: {
      setMyRecipes: (state) => {
        if(localStorage.getItem('myRecipes') == null){
            localStorage.setItem('myRecipes', JSON.stringify(state.myRecipes))
        }
        let myRecipes = localStorage.getItem('myRecipes')
        console.log('myRecipes', myRecipes)
        console.log((JSON.parse( myRecipes as string)))
        let parsedMyRecipe = JSON.parse( myRecipes as string)
        // state.myRecipes.push(...parsedMyRecipe)
        state.myRecipes = parsedMyRecipe
        console.log('state.myRecipes', state.myRecipes)
        
      },
      addMyRecipe: (state, action) => {
        state.myRecipes.push(action.payload)
        // localStorage.setItem('myRecipes', JSON.stringify(state.myRecipes))
        updateMyRecipesState(state)
      },
      deleteMyRecipe: (state, action) => {
        state.myRecipes = state.myRecipes.filter( recipe => recipe.title !== action.payload)
        updateMyRecipesState(state)
      },
      editMyRecipe: (state,action) => {
        state.myRecipes = state.myRecipes.map(recipe => recipe.title === action.payload.title ? {...recipe, ...action.payload} : recipe) 
        updateMyRecipesState(state)
      }
    },
    extraReducers : (builder) => {
              builder.addCase(fetchMyRecipes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchMyRecipes.fulfilled, (state, action) => {
            state.status = 'idle'
            state.myRecipes = action.payload
        })
        .addCase(fetchMyRecipes.rejected, (state) => {
            state.status = 'failed'
        })
    }
  })
// export const recipesSlice = createSlice({
//     name: 'recipes',
//     initialState,
//     reducers: {
//         setRecipes: (state, action) => {
//             state.recipes = action.payload
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchRecipes.pending, (state) => {
//             state.status = 'loading'
//         })
//         .addCase(fetchRecipes.fulfilled, (state, action) => {
//             state.status = 'idle'
//             state.recipes = action.payload
//         })
//         .addCase(fetchRecipes.rejected, (state) => {
//             state.status = 'failed'
//         })
//     }
// })

export const { setMyRecipes,addMyRecipe, editMyRecipe, deleteMyRecipe } = myRecipesSlice.actions
export default myRecipesSlice.reducer