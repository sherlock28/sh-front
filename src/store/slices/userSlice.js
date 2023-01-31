import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    currentUser: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLoading: (state) => {
            if (state.isFetching === false) {
                state.isFetching = true;
            }
        },
        successGetCurrentUser: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isSuccess = true;
        },
        successUserUpdate: (state, action) => {
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
    userLoading,
    successGetCurrentUser,
    successUserUpdate,
    failed,
    clearState,
} = userSlice.actions;

export const getCurrentUserAction = () => async (dispatch) => {
    dispatch(userLoading());

};

export const updateUserAction = (data) => async (dispatch) => {
    dispatch(userLoading());

};

export default userSlice.reducer;

export const userSelector = (state) => state.user;
export const currentUserSelector = (state) => state.user.currentUser;
