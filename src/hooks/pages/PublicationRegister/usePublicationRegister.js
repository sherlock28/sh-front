import { useState } from "react";
import { useForm } from "react-hook-form";

export function useRegisterPublicationForm() {
//   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [errorsCaptcha, setErrorsCaptcha] = useState({ message: "" });
  const [validCaptcha, setValidCaptcha] = useState(false);

  const onSubmit = (data) => {
    if (!validCaptcha) {
      setErrorsCaptcha({
        ...errorsCaptcha,
        message: "Completa el captcha.",
      });
      return;
    }
    // dispatch(createPublicationAction(data));
  };

  function onChange(value) {
    value ? setValidCaptcha(true) : setValidCaptcha(false);
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    errorsCaptcha,
    onSubmit,
    onChange,
  };
}
