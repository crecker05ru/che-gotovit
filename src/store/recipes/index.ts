import { Recipe, RecipeInfo } from './../../types/recipes';
import { http } from './../../api/http';
import { createSlice,createAsyncThunk,PayloadAction } from  '@reduxjs/toolkit'
export interface RecipesState {
    recipes: [Recipe] | []
    status: 'idle' | 'loading' | 'failed'
  }

const initialState: RecipesState =  {
    recipes: [],
    status: 'idle'
}
export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (query: {url: string, options: {}}) => {
      const response = await http.get(query.url, {params: query.options});
      return response.data.hits;
    }
  );

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchRecipes.fulfilled, (state, action) => {
            state.status = 'idle'
            state.recipes = action.payload
        })
        .addCase(fetchRecipes.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const { setRecipes } = recipesSlice.actions
export default recipesSlice.reducer