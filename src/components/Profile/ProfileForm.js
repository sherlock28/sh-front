import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Avatar,
  Box,
  Flex,
  Text,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";
import {
  validateUsername,
  validateCarreer,
  validateGender,
  validateState,
  validateCity,
} from "utils/validations/SignUp/validations";
import { useProfileForm } from "hooks/pages/Profile/useProfileForm";
import { useGetCareers } from "hooks/utils/useGetCareers";
import { useGetStates } from "hooks/utils/useGetStates";
import { useGetCities } from "hooks/utils/useGetCities";


export function ProfileForm() {

  const { careers } = useGetCareers();
  const { cities } = useGetCities();
  const { states } = useGetStates();

  const { register, handleSubmit, onSubmit, onCancel, errors } = useProfileForm();

  return (
    <>
      <Flex justifyContent="center">
        <Flex
          direction={["column", "column", "row", "row", "row"]}
          mr={["50px"]}
        >
          <Box w="100%" mt="8">
            <Avatar
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />
            <Flex
              direction={["column", "column", "column", "column", "column"]}
            >
              <Text fontSize="2xl">Nombre y Apellido</Text>
              <Text fontSize="lg">legajo: 12345</Text>
              <Text fontSize="lg">@username</Text>
              <Text fontSize="lg">admin@admin.com</Text>
            </Flex>
          </Box>
        </Flex>

        <form>
          <Box>
            <Flex mt="8">
              <Heading as="h4" size="md">
                Datos Personales
              </Heading>
            </Flex>

            <Flex direction={["column", "column", "row", "row", "row"]}>
              <FormControl m={2} isInvalid={errors.username}>
                <FormLabel>Ingresá tu nombre de usuario</FormLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="Nombre de usuario"
                  {...register("username", validateUsername)}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl m={2} isInvalid={errors.carreer}>
                <FormLabel>Selecciona tu Carrera</FormLabel>
                <Select
                  name="carreer"
                  placeholder="Selecciona..."
                  {...register("carreer", validateCarreer)}
                  w={["100%", "100%", "100%", "100%", "100%"]}
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
                  {errors.carreer && errors.carreer.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex
              direction={["column", "column", "row", "row", "row"]}
              w="900px"
            >
              <FormControl m={2}>
                <FormLabel>Compartir</FormLabel>
                <Select
                  name="share"
                  {...register("share")}
                  w={["100%", "100%", "49%", "49%", "49%"]}
                  _focus={{ background: "none" }}
                >
                  <option value="No">No</option>
                  <option value="Si">Si</option>
                </Select>
              </FormControl>
            </Flex>

            <Flex direction={["column", "column", "row", "row", "row"]} w="50%">
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
            </Flex>

            <Flex direction={["column", "column", "row", "row", "row"]}>
              <FormControl m={2} isInvalid={errors.state}>
                <FormLabel>Selecciona tu provincia origen</FormLabel>
                <Select
                  name="state"
                  placeholder="Selecciona..."
                  {...register("state", validateState)}
                  _focus={{ background: "none" }}
                  // onChange={(e) => setStateSelected(e.target.value)}
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
          </Box>
        </form>
      </Flex>
      <Center>
        <Button
          onClick={onCancel}
          type="submit"
          isLoading={false}
          loadingText="Enviando"
          width="20%"
          mt={8}
          mx={2}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          colorScheme={"twitter"}
          type="submit"
          isLoading={false}
          loadingText="Enviando"
          width="20%"
          mt={8}
          mx={2}
        >
          Actualizar
        </Button>
      </Center>
    </>
  );
}
