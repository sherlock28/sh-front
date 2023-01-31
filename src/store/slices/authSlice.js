import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { auth } from "services";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        authLoading: state => {
            if (state.isFetching === false) {
                state.isFetching = true;
            }
        },
        successSignIn: (state, action) => {
            state.isFetching = false;
            state.token = action.payload.data;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.isSuccess = true;
        },
        successSignOut: (state, action) => {
            state.isFetching = false;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
        },
        authFailed: (state, action) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload.message;
        },
        clearState: (state, action) => {
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = "";
        },
    },
});

export const {
    authLoading,
    authFailed,
    successSignIn,
    successSignOut,
    clearState,
} = authSlice.actions;

export const signInAction = data => async dispatch => {
    dispatch(authLoading());
    try {
        const { email, password } = data;
        const response = await auth.signInService({ email, password });
        const statusCode = response.status;
        const res = await response.json();
        res.user = jwt_decode(res.data);

        if (statusCode === 200) {
            dispatch(successSignIn(res));
        }
        if (statusCode === 401) {
            dispatch(authFailed(res));
        }
    } catch (error) {
        dispatch(authFailed(error.message));
    }
};

export const signOutAction = () => async dispatch => {
    dispatch(authLoading());
    dispatch(successSignOut());
};

export default authSlice.reducer;

export const authSelector = state => state.auth;
