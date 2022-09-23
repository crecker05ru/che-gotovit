import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import recipesReducer from './recipes'
import myRecipesReducer from './myRecipes'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipesReducer,
    myRecipes: myRecipesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
