import { createSlice } from "@reduxjs/toolkit";

export const stroiSlice = createSlice({
    name: "stroi",
    initialState: {
        products: [],
        navigation: null
    },
    reducers: {
        setStroi(state, action) {
            state.products = action.payload

        },

        setNavigation(state, action) {

            state.navigation = action.payload
            console.log(state.navigation);
        },


    }
});

// Action creators are generated for each case reducer function
export const { setStroi, setNavigation } = stroiSlice.actions;

export const stroiReducer = stroiSlice.reducer;