import { gql } from "@apollo/client";
import { ANY_OWNERSHIPS_TYPE, HOUSE_OWNERSHIPS_TYPE, DEPARTMENT_OWNERSHIPS_TYPE } from "const";

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


export function buildQueryInitialPublications(filters) {
  const page_opt = `
    limit: ${filters.limit}, 
    offset: ${filters.offset}
  `;

  const query = `
      query GetInitialPublications {
          sh_publications(${page_opt}, order_by: { id: desc }) {
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

  return query;
}


export function buildSearchQueryUsingFilters(filters) {

  const page_opt = `
    limit: ${filters.limit}, 
    offset: ${filters.offset}
  `;

  const ownershipsType = filters.ownerships_type === "Departamento" ? DEPARTMENT_OWNERSHIPS_TYPE : HOUSE_OWNERSHIPS_TYPE;

  const ownerships_type = filters.ownerships_type === ANY_OWNERSHIPS_TYPE ? "" : `{ ownership: { ownerships_type: { id: { _eq: ${ownershipsType} } } } },`;

  const where_and = `
    { price: { _gte: ${filters.pricemin}, _lte: ${filters.pricemax} } }
    ${filters.ownerships_type === ANY_OWNERSHIPS_TYPE ? "" : ownerships_type} 
    { is_furnished: { _eq: ${filters.is_furnished} } },
    { ownership: { rooms: { _lte: ${filters.rooms} } } },
    { ownership: { bathrooms: { _lte: ${filters.bathrooms} } } },
    { ownership: { size: { _lte: ${filters.size} } } }
  `;

  const query = `
      query SearchUsingFilters {
        sh_publications(
          ${page_opt},
          where: { 
            _and: [ ${where_and} ]
          }
        ) 
          {
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

  return query;
}