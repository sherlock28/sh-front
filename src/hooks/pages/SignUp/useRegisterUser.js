import { useState } from "react"
import { useMutation } from "@apollo/client";
import { REGISTER_STUDENT_USER } from "client/gql/mutations/registerUser/registerStudentUser";
import { REGISTER_OWNER_USER } from "client/gql/mutations/registerUser/registerOwnerUser";
import { getVarStudentUser } from "client/gql/mutations/registerUser/getVarStudentUser";
import { getVarOwnerUser } from "client/gql/mutations/registerUser/getVarOwnerUser";
import { useForm } from "react-hook-form";

export function useRegisterUser() {
    
    const [registerStudentUser, { loading, error, data: newStudentUser }] = useMutation(REGISTER_STUDENT_USER);
    const [registerOwnerUser, { loading_owner, error_owner, data: newOwnerUser }] = useMutation(REGISTER_OWNER_USER);
    
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