import { useEffect } from "react";
import { getInitialVars } from "client/gql/queries/searches/getInitialVars";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialPublications, publicationSelector } from "store/slices/publicationsSlice";

export function useInitialPublications() {

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, publications } = useSelector(publicationSelector);

  useEffect(() => {
    dispatch(fetchInitialPublications(getInitialVars()));
  }, []);

  return {
    isFetching,
    isSuccess,
    isError,
    publications
  };
}
