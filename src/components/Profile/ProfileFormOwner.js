import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Flex,
  Text,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  validatecareer,
  validatePassword
} from "utils/validations/SignUp/validations";
import { useProfileForm } from "hooks/pages/Profile/useProfileForm";
import { useGetUser } from "hooks/pages/Profile/useGetUser";
import { CustomButton } from "components/commons/CustomButton";

export function ProfileFormOwner() {

  const { user } = useGetUser();

  const { register, handleSubmit, onSubmit, onCancel, errors, isSubmitting } = useProfileForm();

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => setShowPass(!showPass);

  return (
    <>
      <Flex justifyContent="center">
        <form>
          <Flex justifyContent="center" flexDirection="column">

            <Flex
              direction={["column", "column", "row", "row", "row"]}
              mr={["50px"]}
            >
              <Box w="100%" mt="8">
                <Avatar
                  size="xl"
                  name={`${user?.person.lastname}, ${user?.person.firstname}`}
                />
                <Flex
                  direction={["column", "column", "column", "column", "column"]}
                >
                  <Text fontSize="2xl">{`${user?.person.lastname}, ${user?.person.firstname}`}</Text>
                  <Text fontSize="lg">{user?.email}</Text>
                </Flex>
              </Box>
            </Flex>



            <Flex direction={["column", "column", "row", "row", "row"]}>

              <FormControl m={2}>
                <FormLabel>Compartir</FormLabel>
                <Select
                  name="share"
                  {...register("share")}
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  _focus={{ background: "none" }}
                >
                  <option value="No">No</option>
                  <option value="Si">Si</option>
                </Select>
              </FormControl>

              <FormControl m={2} isInvalid={errors.career}>
                <FormLabel>Selecciona tu Carrera</FormLabel>
                <Select
                  name="career"
                  placeholder="Selecciona..."
                  {...register("career", validatecareer)}
                  w={["100%", "100%", "100%", "100%", "100%"]}
                  _focus={{ background: "none" }}
                >
                  <option value="ISI">Ingenieria en sistemas de informacion</option>
                  <option value="MEC">Ingenieria Mecanica</option>
                </Select>
                <FormErrorMessage>
                  {errors.career && errors.career.message}
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

          </Flex>
        </form>

      </Flex>

      <Flex justifyContent="center">
        <Button
          onClick={onCancel}
          type="submit"
          isLoading={false}
          width="20%"
          margin={2}
        >
          Cancelar
        </Button>
        <CustomButton
          handleClick={handleSubmit(onSubmit)}
          type="submit"
          isLoading={isSubmitting}
          loadingText="Guardando"
          width="20%"
          textButton="Guardar"
          margin={2}
        />
      </Flex>
    </>
  );
}
