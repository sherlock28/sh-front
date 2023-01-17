import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { useLocation } from "wouter";
import { paths } from "config/paths";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInAction, authSelector, clearState } from "store/slices/authSlice";

export function useSignInForm() {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**************************************************************************************/

  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, isAuthenticated } = useSelector(authSelector);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  const onSubmitLoggin = (data) => {
    dispatch(signInAction(data));
  };

  /**************************************************************************************/

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => setShowPass(!showPass);

  /**************************************************************************************/


  useEffect(() => {
    if (isAuthenticated) {
      setLocation(paths.search);
    }
  }, [isAuthenticated]);

  useEffect(
    () => {
      if (isError) {
        toast({
          title: "Error",
          description: "Credenciales inválidas",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        dispatch(clearState());
      }

      if (isSuccess) {
        setLocation(paths.search);
      }
    }, // eslint-disable-next-line
    [isError, isSuccess]
  );

  return {
    register,
    handleSubmit,
    errors,

    isFetching,
    onSubmitLoggin,

    showPass,
    handleShowPass
  };
}
