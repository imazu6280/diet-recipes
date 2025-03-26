import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteToggleSlice";
import favoriteTabReducer from "./favoriteTabSlice";
import idReducer from "./idSlice";

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        id: idReducer,
        favoriteTab: favoriteTabReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
