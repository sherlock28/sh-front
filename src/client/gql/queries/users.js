import { gql } from "@apollo/client";

export const GET_STUDENT_USER_BY_ID = gql`
    query GetUserById($id: Int) {
      sh_users(where: {id: {_eq: $id}}) {
        id
        email
        username
        bio
        avatar
        person {
          firstname
          lastname
          gender
          students {
            career {
              name
              id
            }
            city {
              id
              name
            }
            shared
            file_number
          }
        }
        user_category {
          id
          description
        }
      }
    }
`;