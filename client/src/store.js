import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./redux/recipeSlice";
import userSlice from "./redux/userSlice";
import reviewSlice from "./redux/reviewSlice";
import profileSlice from "./redux/profileSlice";
import createRecipeSlice from "./redux/createRecipeSlice";
import listSlice from "./redux/listSlice"

export const store = configureStore({
    reducer:{
        user: userSlice,
        recipe: recipeSlice,
        review: reviewSlice,
        profile: profileSlice,
        createRecipe: createRecipeSlice,
        list: listSlice,
    }
})