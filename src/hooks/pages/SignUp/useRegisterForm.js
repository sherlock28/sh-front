import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, authSelector, clearState } from "store/slices/authSlice";
import { useToast } from "@chakra-ui/react";
import { paths } from "config/paths";

export function useRegisterForm() {
    // eslint-disable-next-line
    const [_, setLocation] = useLocation();

    const { isFetching, isSuccess, isError } = useSelector(authSelector);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const toast = useToast();

    const [showPass, setShowPass] = useState(false);
    const [errorsCaptcha, setErrorsCaptcha] = useState({ message: "" });

    const [validCaptcha, setValidCaptcha] = useState(false);

    const handleShowPass = () => setShowPass(!showPass);

    const onSubmit = data => {
        console.log(data)
        if (!validCaptcha) {
            setErrorsCaptcha({
                ...errorsCaptcha,
                message: "Completa el captcha.",
            });
            return;
        }
        dispatch(signUpAction(data));
    };

    function onChange(value) {
        value ? setValidCaptcha(true) : setValidCaptcha(false);
    }

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(
        () => {
            if (isError) {
                toast({
                    title: "Error",
                    description: "Something went wrong",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                dispatch(clearState());
            }

            if (isSuccess) {
                setLocation(paths.login);
                toast({
                    title: "Success",
                    description: "User created successfully",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }, // eslint-disable-next-line
        [isError, isSuccess]
    );

    return {
        onChange,
        onSubmit,
        register,
        handleSubmit,
        handleShowPass,
        errors,
        errorsCaptcha,
        showPass,
        isFetching,
    };
}
