import { useQuery } from '@apollo/client';
import { SEARCH_FOR_DETAILS } from 'client/gql/queries/searches/searches';

export function useGetPublicationById({ id }) {
    const { loading, error, data: publication } = useQuery(SEARCH_FOR_DETAILS, { variables: { id: id } });

    return { loading, error, publication: publication?.sh_publications[0] };
}