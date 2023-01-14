import React from "react";
import {
  Box,
  Flex,
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  validateNumberSumary,
  validateUsername,
  validateLastname,
  validateFirstname,
  validateDateOfBirth,
  validateGender,
  validateEmail,
  validatePhone,
  validatePassword,
  validatecareer,
  validateState,
  validateCity,
} from "utils/validations/SignUp/validations";
// import ReCAPTCHA from "react-google-recaptcha";
import { useGetCities } from "hooks/utils/useGetCities";
import { useGetStates } from "hooks/utils/useGetStates";
import { useGetCareers } from "hooks/utils/useGetCareers";
import { useRegisterUser } from "hooks/pages/SignUp/useRegisterUser";
import { CustomButton } from "components/commons/CustomButton";

export function RegisterForm() {

  const {
    loading,
    error,
    user,
    onSubmitStudentUser,
    register,
    handleSubmit,
    errors,
    showPass,
    handleShowPass
  } = useRegisterUser();


  const { states } = useGetStates();
  const { cities, setStateSelected } = useGetCities();
  const { careers } = useGetCareers();

  return (
    <>
      <Box my={8} textAlign="left">
        <form>
          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.numberSumary}>
              <FormLabel>Ingresá tu legajo</FormLabel>
              <Input
                id="numberSumary"
                type="text"
                placeholder="Legajo"
                {...register("numberSumary", validateNumberSumary)}
              />
              <FormErrorMessage>
                {errors.numberSumary && errors.numberSumary.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.username}>
              <FormLabel>Ingresá tu nombre de usuario</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Nombre de usuario"
                {...register("username", validateUsername)}
                w={["200px", "300px", "300px", "300px", "300px"]}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

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
            <FormControl m={2} isInvalid={errors.gender}>
              <FormLabel>Selecciona tu genero</FormLabel>
              <Select
                name="gender"
                placeholder="Selecciona..."
                {...register("gender", validateGender)}
                _focus={{ background: "none" }}
              >
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="Other">Otro</option>
              </Select>
              <FormErrorMessage>
                {errors.gender && errors.gender.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.dateOfBirth}>
              <FormLabel>Ingresá tu fecha de nacimiento</FormLabel>
              <Input
                id="dateOfBirth"
                type="date"
                placeholder="Fecha de nacimiento"
                w={"200px"}
                {...register("dateOfBirth", validateDateOfBirth)}
              />
              <FormErrorMessage>
                {errors.dateOfBirth && errors.dateOfBirth.message}
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
                w="49%"
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

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.career}>
              <FormLabel>Selecciona tu Carrera</FormLabel>
              <Select
                name="career"
                placeholder="Selecciona..."
                {...register("career", validatecareer)}
                width={["100%", "100%", "49%", "49%", "49%"]}
                _focus={{ background: "none" }}
              >
                {careers?.map((career) => {
                  return (
                    <option key={career.id} value={career.id}>
                      {career.name}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>
                {errors.career && errors.career.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.state}>
              <FormLabel>Selecciona tu provincia origen</FormLabel>
              <Select
                name="state"
                placeholder="Selecciona..."
                {...register("state", validateState)}
                _focus={{ background: "none" }}
                onChange={(e) => setStateSelected(e.target.value)}
              >
                {states?.map((state) => {
                  return (
                    <option value={state.id} key={state.id}>
                      {state.name}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>
                {errors.state && errors.state.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl m={2} isInvalid={errors.city}>
              <FormLabel>Selecciona tu ciudad origen</FormLabel>
              <Select
                name="city"
                placeholder="Selecciona..."
                {...register("city", validateCity)}
                _focus={{ background: "none" }}
              >
                {cities?.map((city) => {
                  return (
                    <option value={city.id} key={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>
                {errors.city && errors.city.message}
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
              handleClick={handleSubmit(onSubmitStudentUser)}
              type="submit"
              isLoading={loading}
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
