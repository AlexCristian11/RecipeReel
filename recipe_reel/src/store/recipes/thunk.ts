import { Dispatch } from "@reduxjs/toolkit";
import { RecipesActionTypes } from "./types";
import { fetchRecipesFailureAction, fetchRecipesSuccessAction } from "./actions";
import { fetchRecipes } from "../../services";


export const fetchRecipesThunk = () => {
    return async (dispatch: Dispatch<RecipesActionTypes>) => {
        try {
            const recipes = await fetchRecipes();
            dispatch(fetchRecipesSuccessAction(recipes));
        } catch (error: any) {
            dispatch(fetchRecipesFailureAction(error.message));
        }
    }
}
