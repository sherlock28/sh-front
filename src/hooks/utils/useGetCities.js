import { useQuery } from '@apollo/client';
import { GET_CITIES } from 'client/gql/utils';

export function useGetCities() {
    const { loading, error, data: cities } = useQuery(GET_CITIES);

    return { loading, error, cities: cities?.sh_cities };
}