import { gql } from "@apollo/client";

export const GET_STATES = gql`
    query GetStates {
        sh_states {
            id
            name
        }
    }  
`;

export const GET_CITIES = gql`
    query GetCities {
        sh_cities {
            id
            name
        }
    }  
`;

export const GET_CAREERS = gql`
    query GetCarrers {
        sh_carrers {
            id
            name
        }
    }  
`;