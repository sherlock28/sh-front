import { gql } from "@apollo/client";

export const REGISTER_STUDENT_USER_WITH_SOC_NET = gql`
mutation RegisterStudentUserSocialNetworks($lastname: String, $firstname: String, 
    $email: String,$user_status: Boolean)
  {
    insert_sh_persons(objects: [
                  {
                      lastname: $lastname,
                      firstname: $firstname,                  
                      users: {
                          data: [
                              {
                                  email: $email,
                                  user_status: $user_status,
                              }
                          ]
                      }
                  }
    ]){
      returning{id
                users{id}}
    }
  }
`;
