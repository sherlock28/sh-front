import { gql } from "@apollo/client";

export const REGISTER_STUDENT_USER = gql`
mutation RegisterStudentUser($lastname: String, $firstname: String, $gender: String, $birth_date: date, $phone: String, $file_number: bigint, $careers_id: bigint, $shared: Boolean, $username: String, $email: String, $password: String, $bio: String, $user_status: Boolean, $user_categories_id: bigint, $avatar: String) 
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
                students {
                    id
                    career {
                        id
                        name
                    }
                }
            }
        }
    }
`;




  