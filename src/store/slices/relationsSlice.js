import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lifestyles: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const relationsSlice = createSlice({
    name: "relations",
    initialState,
    reducers: {
        setLifestyles: (state) => { 
            state.lifestyles = action.payload;
        },
        relationsLoading: (state) => {
            if (state.isFetching === false) {
                state.isFetching = true;
            }
        },
        success: (state, action) => {
            state.isFetching = false;
            state.isSuccess = true;
        },
        failed: (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload.error;
        },
        clearState: (state, action) => {
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
        },
    },
});

export const {
    setLifestyles,
    relationsLoading,
    success,
    failed,
    clearState,
} = relationsSlice.actions;


export default relationsSlice.reducer;

export const lifestylesSelector = (state) => state.lifestyles;
