import { useQuery } from '@apollo/client';
import { GET_CAREERS } from 'client/gql/queries/utils';

export function useGetCareers() {
    const { loading, error, data: careers } = useQuery(GET_CAREERS);

    return { loading, error, careers: careers?.sh_carrers };
}