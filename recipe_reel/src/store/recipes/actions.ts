import { FETCH_RECIPES_FAILURE, FETCH_RECIPES_SUCCESS, Recipe, RecipesActionTypes } from "./types";

export const fetchRecipesSuccessAction = (recipes: Recipe[]): RecipesActionTypes => ({
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes
})

export const fetchRecipesFailureAction = (error: string): RecipesActionTypes => ({
    type: FETCH_RECIPES_FAILURE,
    payload: error
})