import { createSlice } from "@reduxjs/toolkit";
// import { recomm } from "services";

const initialState = {
    userCreated: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const recommSlice = createSlice({
    name: "recomm",
    initialState,
    reducers: {
        setUserCreated: (state, action) => {
            state.userCreated = action.payload;
        },
        recommLoading: (state) => {
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
    setUserCreated,
    recommLoading,
    success,
    failed,
    clearState,
} = recommSlice.actions;


export const saveUserCreated = (data) => async (dispatch) => {
    window.localStorage.setItem("createdIdPerson", data.id);
    dispatch(setUserCreated(data));
};

export const createNodeAction = (data) => async (dispatch) => {
    dispatch(recommLoading());
    try {
        console.log(data)
        // await recomm.createNodeService({ user: data });
        dispatch(success());
    } catch (err) {
        console.error(err);
        dispatch(failed(err));
    }
};

export const createRelationsAction = (data) => async (dispatch) => {
    dispatch(recommLoading());
    try {
        const idPerson = getCreatedIdPerson();
        // await recomm.createRelationsService({ idPerson, user: data });
        dispatch(success());
    } catch (err) {
        console.error(err);
        dispatch(failed(err));
    }
};

function getCreatedIdPerson() {
    return window.localStorage.getItem("createdIdPerson");
}

export default recommSlice.reducer;

export const userCreatedSelector = (state) => state.userCreated;
