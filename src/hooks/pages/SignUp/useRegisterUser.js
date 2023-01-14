import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { REGISTER_STUDENT_USER } from "client/gql/mutations/registerUser/registerStudentUser";
import { REGISTER_OWNER_USER } from "client/gql/mutations/registerUser/registerOwnerUser";
import { getVarStudentUser } from "client/gql/mutations/registerUser/getVarStudentUser";
import { getVarOwnerUser } from "client/gql/mutations/registerUser/getVarOwnerUser";
import { paths } from "config/paths";

export function useRegisterUser() {
    
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();

    /**************************************************************************************/
    const [registerStudentUser, { loading, error, data: newStudentUser }] = useMutation(REGISTER_STUDENT_USER);
    const [registerOwnerUser, { loading_owner, error_owner, data: newOwnerUser }] = useMutation(REGISTER_OWNER_USER);

    /**************************************************************************************/

    const toast = useToast();

    useEffect(
        () => {

            if (error || error_owner) {
                toast({
                    title: "Error",
                    description: "Algo salió mal",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }

            if (newStudentUser || newOwnerUser) {
                toast({
                    title: "Success",
                    description: "Registrado exitosamente",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });

                setLocation(paths.login);
            }
        }, // eslint-disable-next-line
        [error, error_owner, newStudentUser, newOwnerUser]
    );

    /**************************************************************************************/

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitStudentUser = data => {
        let variables = getVarStudentUser(data);
        registerStudentUser({ variables });
    };

    const onSubmitOwnerUser = data => {
        let variables = getVarOwnerUser(data);
        registerOwnerUser({ variables });
    };

    /**************************************************************************************/

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => setShowPass(!showPass);

    /**************************************************************************************/

    return {
        registerStudentUser,
        loading,
        error,
        userStudent: newStudentUser,

        registerOwnerUser,
        loading_owner,
        error_owner,
        userOwner: newOwnerUser,

        onSubmitStudentUser,
        onSubmitOwnerUser,

        register,
        handleSubmit,
        errors,
        showPass,
        handleShowPass,
    };
}