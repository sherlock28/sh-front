import { useQuery } from '@apollo/client';
import { GET_STATES } from 'client/gql/queries/utils';

export function useGetStates() {
    const { loading, error, data: states } = useQuery(GET_STATES);

    return { loading, error, states: states?.sh_states };
}