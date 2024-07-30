export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

interface FetchRecipesSuccessAction {
    type: typeof FETCH_RECIPES_SUCCESS;
    payload: Recipe[];
}

interface FetchRecipesFailureAction {
    type: typeof FETCH_RECIPES_FAILURE;
    payload: string;
}

export type RecipesActionTypes =
    | FetchRecipesSuccessAction
    | FetchRecipesFailureAction


export interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType?: string;
}