import { FETCH_RECIPES_FAILURE, FETCH_RECIPES_SUCCESS, Recipe, RecipesActionTypes } from "./types";

interface RecipeState {
    recipes: Recipe[],
    error: string | null
}

const initialState: RecipeState = {
    recipes: [],
    error: null
}

const recipeReducer = (state:RecipeState = initialState, action: RecipesActionTypes) => {
    switch (action.type) {
        case FETCH_RECIPES_SUCCESS:
            return { ...state, recipes: action.payload };
        case FETCH_RECIPES_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default recipeReducer;