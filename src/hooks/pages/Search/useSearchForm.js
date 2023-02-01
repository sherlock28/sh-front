import { getFiltersVariables } from "client/gql/queries/searches/getFiltersVariables";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicationsUsingFilters, publicationSelector } from "store/slices/publicationsSlice";

export function useSearchForm() {

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError } = useSelector(publicationSelector);

  const onSubmitSearchPublications = async data => {
    data.limit = 6;
    data.offset = 0;
    dispatch(fetchPublicationsUsingFilters(getFiltersVariables(data)));
  };

  return {
    onSubmitSearchPublications,
    isFetching, 
    isSuccess, 
    isError
  };
}
