import { useState, useEffect } from "react"
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { REGISTER_STUDENT_USER } from "client/gql/mutations/registerUser/registerStudentUser";
import { REGISTER_OWNER_USER } from "client/gql/mutations/registerUser/registerOwnerUser";
import { getVarStudentUser } from "client/gql/mutations/registerUser/getVarStudentUser";
import { getVarOwnerUser } from "client/gql/mutations/registerUser/getVarOwnerUser";
import { encryptPassword } from "utils/encryptPassword";
import { paths } from "config/paths";
import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";
import { getAgeFromBirthDate } from "utils/getAgeFromBirthDate";

export function useRegisterUser() {
    
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();
    const toast = useToast();

    /**************************************************************************************/
    const [registerStudentUser, { loading, error, data: newStudentUser }] = useMutation(REGISTER_STUDENT_USER);
    const [registerOwnerUser, { loading_owner, error_owner, data: newOwnerUser }] = useMutation(REGISTER_OWNER_USER);

    /**************************************************************************************/

    const { isAuthenticated } = useSelector(authSelector);

    useEffect(() => {
        if (isAuthenticated) {
            setLocation(paths.search);
        }
    }, [isAuthenticated]);

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
                savingUserCreated(newStudentUser.insert_sh_persons.returning.at(0));
                setLocation(paths.questions);
            }
        }, // eslint-disable-next-line
        [error, error_owner, newStudentUser, newOwnerUser]
        );
        
    const savingUserCreated = (user) => {
       
        const userToSave = {
            "id": user.id,
            "fullname": `${user.lastname}, ${user.firstname}`,
            "username": "johndoe",
            "career": user.students.at(0).career.id,
            "genre": user.gender,
            "age": getAgeFromBirthDate(user.birth_date),
            "state": user.students.at(0).city.state_id,
            "city": user.students.at(0).city.id,
            "bio": user.users.at(0).bio
        };

        window.localStorage.setItem("userCreated", JSON.stringify(userToSave));
    }

    /**************************************************************************************/

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitStudentUser = async data => {
        let variables = getVarStudentUser(data);
        variables.password = await encryptPassword(variables.password);
        registerStudentUser({ variables });
    };

    const onSubmitOwnerUser = async data => {
        let variables = getVarOwnerUser(data);
        variables.password = await encryptPassword(variables.password);
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