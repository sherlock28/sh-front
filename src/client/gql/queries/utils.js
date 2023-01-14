import { gql } from "@apollo/client";

export const GET_STATES = gql`
    query GetStates {
        sh_states(order_by: {name: asc}) {
            id
            name
        }
    }  
`;

export const GET_CITIES = gql`
    query GetCities($state_id: bigint) {
        sh_cities(where: {state_id: {_eq: $state_id}}) {
            id
            name
        }
    }
`;

export const GET_CAREERS = gql`
    query GetCareers {
        sh_careers {
            id
            name
        }
    }  
`;