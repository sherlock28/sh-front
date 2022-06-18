import { gql } from "@apollo/client";

export const GET_CITIES = gql`
    query GetCities {
        sh_cities {
            id
            name
        }
    }
`;

  