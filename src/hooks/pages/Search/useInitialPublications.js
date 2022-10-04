import { useQuery } from "@apollo/client";
import { GET_INITIAL_PUBLICATIONS } from "client/gql/searches/searches";
import { getInitialVars } from "client/gql/searches/getInitialVars";


export function useInitialPublications() {

  const { loading, error, data: initialPublications } = useQuery(GET_INITIAL_PUBLICATIONS, { variables: getInitialVars() });

  return {
    loading,
    error,
    initialPublications: initialPublications?.sh_publications
  };
}
