import { gql } from "@apollo/client";

export const REGISTER_OWNER_USER = gql`
mutation RegisterOwnerUser($lastname: String, $firstname: String, $gender: String, $phone: String, 
            $username: String, $email: String, $password: String, $bio: String, 
            $user_status: Boolean, $user_categories_id: bigint, $avatar: String) {
                insert_sh_persons (
                    objects: [
                        {
                            lastname: $lastname,
                            firstname: $firstname,                
                            gender: $gender,
                            phone: $phone,
                            owners: {
                                data: [
                                    {}
                                ]
                            },
                            users: {
                                data: [
                                    {
                                        username: $username,
                                        email: $email,
                                        password: $password,
                                        bio: $bio,
                                        user_status: $user_status,
                                        user_categories_id: $user_categories_id,
                                        avatar: $avatar
                                    }
                                ]
                            }
                        }
                    ]
                ) {
                    returning {
                        firstname
                        lastname
                        users {
                            id
                            email
                        }
                        owners {
                            id
                        }
                    }
                }
            }
`;




  