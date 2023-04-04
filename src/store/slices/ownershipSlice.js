import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ownerships: [],
    ownership: null,
    ownershipIdSelected: -1,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const ownershipSlice = createSlice({
    name: "ownerships",
    initialState,
    reducers: {
        ownershipsLoading: state => {
            if (state.isFetching === false) {
                state.isFetching = true;
            }
        },
        ownershipsSuccess: (state, action) => {
            if (state.isFetching === true) {
                state.isFetching = false;
                state.isSuccess = true;
                state.ownership = action.payload;
            }
        },
        ownershipsFailed: (state, action) => {
            if (state.isFetching === true) {
                state.isFetching = false;
                state.isError = true;
                state.isError = action.payload.message;
            }
        },
        clearState: state => {
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
        },
        setOwnershipId: (state, action) => {
            state.ownershipIdSelected = action.payload;
        }
    },
});

export const {
    ownershipsLoading,
    ownershipsSuccess,
    ownershipsFailed,
    clearState,
    setOwnershipId,
} = ownershipSlice.actions;


export default ownershipSlice.reducer;

export const ownershipSelector = (state) => state.ownerships;
