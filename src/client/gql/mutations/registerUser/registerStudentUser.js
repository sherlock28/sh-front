import { gql } from "@apollo/client";

export const REGISTER_STUDENT_USER = gql`
mutation RegisterStudentUser($lastname: String, $firstname: String, $gender: String, $birth_date: date, $phone: String, $cities_id: bigint, $file_number: bigint, $careers_id: bigint, $shared: Boolean, $username: String, $email: String, $password: String, $bio: String, $created_with_sn: Boolean, $user_status: Boolean, $user_categories_id: bigint, $avatar: String) 
    {
        insert_sh_persons (
            objects: [
                {
                    lastname: $lastname,
                    firstname: $firstname,
                    gender: $gender,
                    birth_date: $birth_date,
                    phone: $phone,
                    students: {
                        data: [
                            {
                                cities_id: $cities_id,
                                file_number: $file_number,
                                careers_id: $careers_id,
                                shared: $shared
                            }
                        ]
                    },
                    users: {
                        data: [
                            {
                                username: $username,
                                email: $email,
                                password: $password,
                                bio: $bio,
                                created_with_sn: $created_with_sn, 
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
                id
                firstname
                lastname
              	gender
              	birth_date
                users {
                    id
                    username
                    email
                  	bio
                    created_with_sn
                    user_category {
                        id
                        description
                    }
                }
                students {
                    id
                    city {
                        id
                        name
                      	state_id
                    }
                    career {
                        id
                        name
                    }
                }
            }
        }
    }
`;
