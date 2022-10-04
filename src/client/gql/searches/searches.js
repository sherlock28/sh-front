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
    query SearchForDetails {
        sh_publications {
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
