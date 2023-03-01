import { useQuery } from '@apollo/client';
import { GET_TAGS } from 'client/gql/queries/utils';

export function useGetTags() {
    const { loading, error, data: tags } = useQuery(GET_TAGS);

    return { loading, error, allTags: tags?.sh_tags };
}