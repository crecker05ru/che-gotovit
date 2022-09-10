import { http } from './../../api/http';
import { createSlice,createAsyncThunk } from  '@reduxjs/toolkit'

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (query: {url: string, options: {}}) => {
      const response = await http.get(query.url, {params: query.options});
      return response.data.hits;
    }
  );

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: ''
    },
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        }
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