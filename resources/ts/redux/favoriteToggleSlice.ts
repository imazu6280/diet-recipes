import { createSlice } from "@reduxjs/toolkit";

export type favorite = {
    is_favorite: number;
};

const initialState: favorite = {
    is_favorite: 0,
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        resetFavorite: (state) => {
            state.is_favorite = 0;
        },
        toggleFavorite: (state) => {
            state.is_favorite = state.is_favorite === 1 ? 0 : 1;
        },
        setFavorite: (state, action) => {
            state.is_favorite = action.payload;
        },
    },
});

export const { resetFavorite, toggleFavorite, setFavorite } =
    favoriteSlice.actions;
export default favoriteSlice.reducer;
