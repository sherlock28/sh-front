import React, { useState } from "react";
import {
  Box,
  Flex,
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// eslint-disable-next-line
// import { signUpAction } from "reducers/authSlice";
import {
  validateLastname,
  validateFirstname,
  validateEmail,
  validatePhone,
  validatePassword,
} from "utils/validations/SignUp/validationsOwner";
import { CustomButton } from "components/commons/CustomButton";
import { useRegisterUser } from "hooks/pages/SignUp/useRegisterUser";
// import ReCAPTCHA from "react-google-recaptcha";
// import { paths } from "config/paths";

export function RegisterFormOwner() {

  const {
    loading_owner,
    error_owner,
    userOwner,
    onSubmitOwnerUser,
    register,
    handleSubmit,
    errors,
    showPass,
    handleShowPass 
  } = useRegisterUser();

  // const [errorsCaptcha, setErrorsCaptcha] = useState({ message: "" });
  // const [validCaptcha, setValidCaptcha] = useState(false);

  return (
    <>
      <Box my={8} textAlign="left">
        <form>
          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.lastname}>
              <FormLabel>Ingresá tu apellido</FormLabel>
              <Input
                id="lastname"
                type="text"
                placeholder="Apellido"
                {...register("lastname", validateLastname)}
              />
              <FormErrorMessage>
                {errors.lastname && errors.lastname.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.firstname}>
              <FormLabel>Ingresá tu nombre</FormLabel>
              <Input
                id="firstname"
                type="text"
                placeholder="Nombre"
                {...register("firstname", validateFirstname)}
              />
              <FormErrorMessage>
                {errors.firstname && errors.firstname.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.email}>
              <FormLabel>Ingresá tu email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email", validateEmail)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.phone}>
              <FormLabel>Ingresá tu número de celular</FormLabel>
              <Input
                id="phone"
                type="text"
                placeholder="Celular"
                w={"200px"}
                {...register("phone", validatePhone)}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.password}>
              <FormLabel>Ingresá tu contraseña</FormLabel>
              <InputGroup>
                <Input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password", validatePassword)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowPass}>
                    {showPass ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.confirmPassword}>
              <FormLabel>Confirma tu contraseña</FormLabel>
              <Input
                id="confirmPassword"
                type={showPass ? "text" : "password"}
                placeholder="Confirmación de contraseña"
                {...register("confirmPassword", validatePassword)}
              />
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          {/* <FormControl mt={10} isInvalid={errorsCaptcha.message}>
            <Center d="flex" flexDir="column">
              <ReCAPTCHA
                sitekey={`${process.env.REACT_APP_SITE_KEY}`}
                onChange={onChange}
              />
              <FormErrorMessage>
                {errorsCaptcha && errorsCaptcha.message}
              </FormErrorMessage>
            </Center>
          </FormControl> */}

          <Center m={8}>
            <CustomButton
              handleClick={handleSubmit(onSubmitOwnerUser)}
              type="submit"
              isLoading={loading_owner}
              loadingText="Registrando"
              width="40%"
              textButton="Registrarse"
            />
          </Center>
        </form>
      </Box>
    </>
  );
}
