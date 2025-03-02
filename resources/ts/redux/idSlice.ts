import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type idType = {
    id?: number | null;
};

const initialState: idType = {
    id: null,
};

const idSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        },
    },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
