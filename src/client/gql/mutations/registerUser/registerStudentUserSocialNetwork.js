import { gql } from "@apollo/client";

export const REGISTER_STUDENT_USER_WITH_SOC_NET = gql`
mutation RegisterStudentUserSocialNetworks($lastname: String, $firstname: String, 
  $email: String, $created_with_sn: Boolean, $user_status: Boolean)
    {
      insert_sh_persons_one(object: 
        {
          lastname: $lastname,
          firstname: $firstname,
          users: {
            data: [
              {
                email: $email,
                created_with_sn: $created_with_sn,
                user_status: $user_status
              }
            ]
          }
        }
      )
      {
        id
        users {
          id
          email
          created_with_sn
        }
      }
    }
`;
