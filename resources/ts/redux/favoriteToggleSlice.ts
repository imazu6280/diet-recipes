import { createSlice } from "@reduxjs/toolkit"

export type favorite = {
    is_favorite: boolean | number
}

const initialState: favorite = {
    is_favorite: 0,
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state) => {
            state.is_favorite = state.is_favorite === 1 ? 0 : 1
        },
    },
})

export const { toggleFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
