import { createSlice } from "@reduxjs/toolkit";
import { buildQueryInitialPublications, buildSearchQueryUsingFilters } from "client/gql/queries/searches/searches";
import { publications } from "services";

const initialState = {
  publications: [],
  publication: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const publicationSlice = createSlice({
  name: "publications",
  initialState,
  reducers: {
    publicationLoading: state => {
      if (state.isFetching === false) {
        state.isFetching = true;
      }
    },
    successPublication: (state, action) => {
      if (state.isFetching === true) {
        state.isFetching = false;
        state.isSuccess = true;
        state.publications = action.payload;
      }
    },
    publicationsFailed: (state, action) => {
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
  },
});

export const {
  publicationLoading,
  successPublication,
  publicationsFailed,
  clearState,
} = publicationSlice.actions;

export const fetchInitialPublications = data => async (dispatch) => {
  dispatch(publicationLoading());
 
  const query = buildQueryInitialPublications(data);
  const pubsArr = await publications.getPublicationsService(query);

  dispatch(successPublication(pubsArr));
};

export const fetchPublicationsUsingFilters = data => async (dispatch) => {
  dispatch(publicationLoading());

  const query = buildSearchQueryUsingFilters(data);
  const pubsArr = await publications.getPublicationsService(query);

  dispatch(successPublication(pubsArr));
};

export default publicationSlice.reducer;

export const publicationSelector = (state) => state.publications;
