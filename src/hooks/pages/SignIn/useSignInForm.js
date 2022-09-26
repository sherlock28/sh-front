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
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError } = useSelector(authSelector);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => setShowPass(!showPass);

  const onSubmit = (data) => {
    dispatch(signInAction(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

//   useEffect(
//     () => {
//       if (isError) {
//         toast({
//           title: "Error",
//           description: "Something went wrong",
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//         dispatch(clearState());
//       }

//       if (isSuccess) {
//         setLocation(paths.search);
//       }
//     }, // eslint-disable-next-line
//     [isError, isSuccess]
//   );

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPass,
    handleShowPass,
    isFetching,
  };
}
