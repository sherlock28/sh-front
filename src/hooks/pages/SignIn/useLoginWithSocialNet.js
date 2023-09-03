import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { REGISTER_STUDENT_USER_WITH_SOC_NET } from "client/gql/mutations/registerUser/registerStudentUserSocialNetwork";
import { getVarStudentUserFacebook, getVarStudentUserGoogle, getVarStudentUserGithub } from "client/gql/mutations/registerUser/getVarStudentUser";
import { paths } from "config/paths";
import { AUTH_PROVIDERS, USER_CATEGORIES } from "const";
import { useDispatch, useSelector } from "react-redux";
import { signInSocialNetAction, authSelector, clearState } from "store/slices/authSlice";


import { getAgeFromBirthDate } from "utils/getAgeFromBirthDate";

const GOOGLE_AUTH_SCOPE = "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid";

const GITHUB_EMAILS_API = "https://api.github.com/user/emails";

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

    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, isAuthenticated, user_category } = useSelector(authSelector);

    useEffect(() => {
        if (isAuthenticated && user_category !== USER_CATEGORIES.DEFAULT) {
            setLocation(paths.search);
        }
        if (isAuthenticated && user_category === USER_CATEGORIES.DEFAULT) {
            setLocation(paths.register);
        }
    }, [isAuthenticated, user_category]);

    useEffect(
        () => {

            if (error && user_category !== USER_CATEGORIES.DEFAULT) {
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

    const onSubmitLogginWithSocialNet = ({ data, provider }) => {

        if (AUTH_PROVIDERS.GOOGLE === provider)
            onSubmitStudentUserGoogle({ data });

        if (AUTH_PROVIDERS.FACEBOOK === provider)
            onSubmitStudentUserFacebook({ data });

        if (AUTH_PROVIDERS.GITHUB === provider)
            onSubmitStudentUserGithub({ data });
    };

    const onSubmitStudentUserGoogle = async ({ data }) => {

        let variables = getVarStudentUserGoogle(data);
        registerStudentUserWithSocNet({ variables }).then(({ data }) => {
            dispatch(signInSocialNetAction(variables.email));

        }).catch(error => {
            if (error.graphQLErrors.at(0).extensions.code === "constraint-violation") {
                dispatch(signInSocialNetAction(variables.email));
            }
        });
    };

    const onSubmitStudentUserFacebook = async ({ data }) => {

        let variables = getVarStudentUserFacebook(data);

        registerStudentUserWithSocNet({ variables })
            .then(({ data }) => {
                dispatch(signInSocialNetAction(variables.email));
            })
            .catch(error => {
                if (error.graphQLErrors.at(0).extensions.code === "constraint-violation") {
                    dispatch(signInSocialNetAction(variables.email));
                }
            });
    };

    const onSubmitStudentUserGithub = async ({ data }) => {
        let { access_token } = data;
        let variables = getVarStudentUserGithub(data);
        let email = await getEmailFromGithub(access_token);
        variables.email = email;

        registerStudentUserWithSocNet({ variables })
            .then(({ data }) => {
                dispatch(signInSocialNetAction(variables.email));
            })
            .catch(error => {
                console.log(error)
                if (error.graphQLErrors.at(0).extensions.code === "constraint-violation") {
                    dispatch(signInSocialNetAction(variables.email));
                }
            });
    };

    const getEmailFromGithub = async (access_token) => {

        var githubHeaders = new Headers();
        githubHeaders.append("X-GitHub-Api-Version", "2022-11-28");
        githubHeaders.append("Accept", "application/vnd.github+json");
        githubHeaders.append("Authorization", `Bearer ${access_token}`);

        var requestOptions = {
            method: 'GET',
            headers: githubHeaders,
            redirect: 'follow'
        };

        const response = await fetch(GITHUB_EMAILS_API, requestOptions)
        const data = await response.json();
        return data.at(0).email;
    }

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
        onSubmitLogginWithSocialNet,
        GOOGLE_AUTH_SCOPE,
        setProvider,
        setProfile
    };
}