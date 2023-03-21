import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import publicationsSlice from "./slices/publicationsSlice";
import recommSlice from "./slices/recommSlice";
import ownershipSlice from "./slices/ownershipSlice";

const reducers = combineReducers({
    user: userSlice,
    auth: authSlice,
    publications: publicationsSlice,
    recomm: recommSlice,
    ownership: ownershipSlice
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;
