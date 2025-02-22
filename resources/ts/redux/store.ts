import { configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "./favoriteToggleSlice"

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
