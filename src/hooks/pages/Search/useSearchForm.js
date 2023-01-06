import { useLazyQuery } from "@apollo/client";
import { SEARCH_PUBLICATIONS } from "client/gql/queries/searches/searches";
import { getVariables } from "client/gql/queries/searches/getVariables";


export function useSearchForm() {

  let variables = getVariables();
  
  const [searchPublication, { loading, error, data: publications }] = useLazyQuery(SEARCH_PUBLICATIONS, { variables });

  return {
    searchPublication,
    loading,
    error,
    publications: publications?.sh_publications
  };
}
