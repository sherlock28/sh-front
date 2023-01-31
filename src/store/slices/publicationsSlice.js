import { createSlice } from "@reduxjs/toolkit";
import { buildSearchQueryUsingFilters } from "client/gql/queries/searches/searches";
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

export const fetchAllPublications = data => async (dispatch) => {
  dispatch(publicationLoading());
  console.log(data);
  // try {
  //   const allPublications = await publications.getAllPublications();
  //   dispatch(publicationsReceived(allPublications));
  // } catch (err) {
  //   dispatch(fetchFailed(err.toString()));
  // }
  dispatch(successPublication());
};

export const fetchPublicationsUsingFilters = data => async (dispatch) => {
  dispatch(publicationLoading());

  const query = buildSearchQueryUsingFilters(data);
  const pub = await publications.getPublicationsUsingFiltersService(query);
  console.log(pub);

  dispatch(successPublication());
};

export default publicationSlice.reducer;

export const publicationSelector = (state) => state.publications;
