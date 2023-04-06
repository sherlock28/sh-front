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
        sh_cities(where: {state_id: {_eq: $state_id}}, order_by: {name: asc}) {
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

export const GET_TAGS = gql`
    query GetTags {
        sh_tags {
            id
            description
        }
    }  
`;

export const GET_OWNERSHIPS_BY_OWNER_ID = gql`
    query GetOwnershipsByOwnerId($owner_id: bigint) {
        sh_ownerships(where: {owners_id: {_eq: $owner_id}}) {
            id
            address {
                address
                floor
                apartment
            }
            owners_id
        }
    }
`;

export const IS_PUBLISHED = gql`
    query IsPublished($id: bigint) {
        sh_publications(where: {ownerships_id: {_eq: $id}})
        {
            id
        }
    }  
`;
