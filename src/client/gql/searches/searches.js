import { gql } from "@apollo/client";

export const GET_INITIAL_PUBLICATIONS = gql`
    query SearchForCards($limit: Int, $offset: Int) {
        sh_publications(limit: $limit, offset: $offset, order_by: {id: desc}) {
            id
            title
            price
            ownership {
                id
                rooms
                bathrooms
                rating
                ownerships_images {
                  imageurl
                }
                coordinate {
                  lat
                  lon
                }
            }
        }
    }  
`;

export const SEARCH_PUBLICATIONS = gql`
query SearchForCards($limit: Int, $offset: Int) {
    sh_publications(limit: $limit, offset: $offset) {
        id
        title
        price
        ownership {
            id
            rooms
            bathrooms
            rating
            ownerships_images {
                imageurl
            }
            coordinate {
                lat
                lon
            }
        }
    }
}  
`;

export const SEARCH_FOR_DETAILS = gql`
query SearchForDetails($id: Int) {
    sh_publications(where: {id: {_eq: $id}}) {
        id
        title
        price
        ownership {
            id
            rooms
            bathrooms
            rating
            size
            ownerships_images {
                public_id
                imageurl
            }
            coordinate {
                lat
                lon
            }
            ownerships_type {
                description
            }
        }
    }
}
`;
