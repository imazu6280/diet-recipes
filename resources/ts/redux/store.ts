import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteToggleSlice";
import idReducer from "./idSlice";

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        id: idReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
