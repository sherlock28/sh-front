import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { REGISTER_STUDENT_USER_WITH_SOC_NET } from "client/gql/mutations/registerUser/registerStudentUserFacebook";
import { getVarStudentUserFacebook, getVarStudentUserGoogle } from "client/gql/mutations/registerUser/getVarStudentUser";
import { paths } from "config/paths";
import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";
import { getAgeFromBirthDate } from "utils/getAgeFromBirthDate";

const GOOGLE_AUTH_SCOPE = "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid";

export function useLoginWithSocialNet() {
    // eslint-disable-next-line
    const [provider, setProvider] = useState('');
    // eslint-disable-next-line
    const [profile, setProfile] = useState(null)

    // eslint-disable-next-line
    const [_, setLocation] = useLocation();

    const toast = useToast();

    /**************************************************************************************/
    const [registerStudentUserWithSocNet, { loading, error, data: newStudentUser }] = useMutation(REGISTER_STUDENT_USER_WITH_SOC_NET);

    /**************************************************************************************/

    const { isAuthenticated } = useSelector(authSelector);

    useEffect(() => {
        if (isAuthenticated) {
            setLocation(paths.search);
        }
    }, [isAuthenticated]);

    useEffect(
        () => {

            if (error) {
                toast({
                    title: "Error",
                    description: "Algo salió mal",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }

            if (newStudentUser) {
                toast({
                    title: "Success",
                    description: "Registrado exitosamente",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                newStudentUser ? setLocation(paths.questions) : setLocation(paths.login);
            }
        }, // eslint-disable-next-line
        [error, newStudentUser]
    );

    /**************************************************************************************/

    const onSubmitStudentUserFacebook = async ({ data }) => {

        let variables = getVarStudentUserFacebook(data);

        registerStudentUserWithSocNet({ variables })
            .then(({ data }) => {
                console.log(data);
            })
            .catch(error => {
                console.log(error.graphQLErrors[0].extensions);
                if (error.graphQLErrors[0].extensions.code == "constraint-violation") {
                    console.log("Error: constraint-violation")
                }
            });
    };

    const onSubmitStudentUserGoogle = async ({ data }) => {

        let variables = getVarStudentUserGoogle(data);
        console.log({ variables })

        registerStudentUserWithSocNet({ variables }).then(({ data }) => {
            console.log(data);
        }).catch(error => {
            console.log(error.graphQLErrors[0].extensions);
            if (error.graphQLErrors[0].extensions.code == "constraint-violation") {
                console.log("Capturado error.")
            }
        }
        );
    };

    /**************************************************************************************/

    const makeUserToSave = (user) => {
        const userToSave = {
            "id": user.id,
            "fullname": `${user.lastname}, ${user.firstname}`,
            "username": user.users.at(0).username,
            "career": user.students.at(0).career.id,
            "gender": user.gender,
            "age": getAgeFromBirthDate(user.birth_date),
            "state": user.students.at(0).city.state_id,
            "city": user.students.at(0).city.id,
            "bio": user.users.at(0).bio
        };
        return userToSave;
    }

    return {
        onSubmitStudentUserFacebook,
        onSubmitStudentUserGoogle,
        GOOGLE_AUTH_SCOPE,
        setProvider,
        setProfile
    };
}