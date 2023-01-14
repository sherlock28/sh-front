import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CITIES } from 'client/gql/queries/utils';

export function useGetCities() {

    const [isSelectedCity, setIsSelectedCity] = useState(false);

    let cities = [];
    let variables = { "state_id": window.localStorage.getItem("stateSelected") };

    const [searchCity, { loading, error, data: citiesFromApi }] = useLazyQuery(GET_CITIES, { variables });

    const setStateSelected = (id) => {
        if (id === "") {
            window.localStorage.removeItem("stateSelected");
            setIsSelectedCity(false);
            return;
        }
        window.localStorage.setItem("stateSelected", id);
        setIsSelectedCity(true);
        searchCity();
    }

    if (!isSelectedCity) cities = [];
    cities = citiesFromApi?.sh_cities;

    return { setStateSelected, loading, error, cities };
}