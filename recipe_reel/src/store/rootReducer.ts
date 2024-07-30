import { combineReducers } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/reducer";

const rootReducer = combineReducers({
    recipes: recipeReducer
})

export default rootReducer;