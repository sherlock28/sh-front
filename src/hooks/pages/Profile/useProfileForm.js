import { useForm } from "react-hook-form";

export function useProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log({ data });
        console.log("submit");
    };

    const onCancel = (e) => {
        e.preventDefault();
        console.log("Cancel");
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        onCancel,
        errors,
    };
}
