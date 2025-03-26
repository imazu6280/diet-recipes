import { createSlice } from "@reduxjs/toolkit";

export type favoriteTab = {
    isFavoriteTab: boolean;
};

const initialState: favoriteTab = {
    isFavoriteTab: false,
};

const favoriteTabSlice = createSlice({
    name: "favoriteTab",
    initialState,
    reducers: {
        setFavoriteTab: (state, action) => {
            state.isFavoriteTab = action.payload;
        },
    },
});

export const { setFavoriteTab } = favoriteTabSlice.actions;
export default favoriteTabSlice.reducer;
