import React from "react";
import {
  Box,
  Flex,
  Heading,
  FormErrorMessage,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Textarea,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Stack,
  Center
} from "@chakra-ui/react";
import {
  validateIsFurnished,
  validateTitle,
  validateDescription,
  validatePrice,
  validateFullname,
  validatePhone,
  validateEmailSignUp
} from "utils/validations/PublicationRegister";
import ReCAPTCHA from "react-google-recaptcha";
import { CustomButton } from "components/commons/CustomButton";
import { useRegisterPublicationForm } from "hooks/pages/PublicationRegister/usePublicationRegister";

export function PublicationRegisterForm() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    errorsCaptcha,
    onSubmit,
    onChange,
  } = useRegisterPublicationForm();

  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl m={2} isInvalid={errors.title}>
          <FormLabel>Ingresá un título</FormLabel>
          <Input
            id="title"
            type="text"
            w="98%"
            placeholder="Escribe un título para la publicación..."
            {...register("title", validateTitle)}
          />
          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl m={2} isInvalid={errors.description}>
          <FormLabel>Descripción</FormLabel>
          <Textarea
            id="description"
            placeholder="Escribe una descripción..."
            w="98%"
            h={"150px"}
            resize="none"
            {...register("description", validateDescription)}
          />

          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <Flex direction={["column", "column", "row", "row", "row"]}>
          <FormControl
            m={2}
            w={["100%", "100%", "100%", "49%", "47%"]}
            isInvalid={errors.isFurnished}
          >
            <FormLabel>Amoblado</FormLabel>
            <Select
              name="isFurnished"
              {...register("isFurnished", validateIsFurnished)}
              placeholder="¿Esta el inmueble amoblado?"
              _focus={{ background: "none" }}
            >
              <option value="1">Si</option>
              <option value="0">No</option>
            </Select>
            <FormErrorMessage>
              {errors.isFurnished && errors.isFurnished.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            m={2}
            w={["100%", "100%", "100%", "49%", "47%"]}
            isInvalid={errors.price}
          >
            <FormLabel>Precio ($)</FormLabel>
            <NumberInput size="md" m={2} defaultValue={0} min={0} max={50000}>
              <NumberInputField {...register("price", validatePrice)} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>
              {errors.price && errors.price.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Box textAlign="center" mt={4} mb={8}>
          <Heading as="h4" size="md">
            Información de contacto
          </Heading>
        </Box>

        <Flex direction={["column", "column", "row", "row", "row"]}>
          <FormControl m={2} isInvalid={errors.fullname}>
            <FormLabel>Ingresá tu nombre</FormLabel>
            <Input
              id="fullname"
              type="text"
              w="98%"
              placeholder="Nombre"
              {...register("fullname", validateFullname)}
            />
            <FormErrorMessage>
              {errors.fullname && errors.fullname.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl m={2} isInvalid={errors.phone}>
            <FormLabel>Ingresá tu teléfono</FormLabel>
            <Input
              id="phone"
              type="text"
              w="98%"
              placeholder="Teléfono"
              {...register("phone", validatePhone)}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <FormControl m={2} isInvalid={errors.email}>
          <FormLabel>Ingresá tu email</FormLabel>
          <Input
            id="email"
            type="text"
            w={["100%", "100%", "47%", "47%", "47%"]}
            placeholder="Email"
            {...register("email", validateEmailSignUp)}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <Accordion mt={8} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Restricciones
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack
                spacing={10}
                direction={["column", "column", "row", "row"]}
                mt={4}
              >
                <FormControl isInvalid={errors.pets}>
                  <Checkbox {...register("pets")}>Mascotas</Checkbox>
                  <FormErrorMessage>
                    {errors.pets && errors.pets.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.smokers}>
                  <Checkbox {...register("smokers")}>Fumadores</Checkbox>
                  <FormErrorMessage>
                    {errors.smokers && errors.smokers.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.children}>
                  <Checkbox {...register("children")}>Niños</Checkbox>
                  <FormErrorMessage>
                    {errors.children && errors.children.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <FormControl mt={4} isInvalid={errors.amount}>
                <FormLabel>Cantidad de inquilinos: </FormLabel>
                <NumberInput
                  w={20}
                  size="sm"
                  defaultValue={1}
                  min={1}
                  max={20}
                >
                  <NumberInputField {...register("amount")} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {errors.amount && errors.amount.message}
                </FormErrorMessage>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <FormControl mt={16} isInvalid={errorsCaptcha.message}>
          <Center d="flex" flexDir="column">
            {/* <ReCAPTCHA
              sitekey={`${process.env.REACT_APP_SITE_KEY}`}
              onChange={onChange}
            /> */}
            <FormErrorMessage>
              {errorsCaptcha && errorsCaptcha.message}
            </FormErrorMessage>
          </Center>
        </FormControl>

        <Center m={8}>
          <CustomButton
            handleClick={handleSubmit(onSubmit)}
            type="submit"
            isLoading={isSubmitting}
            loadingText="Enviando"
            width="50%"
            textButton="Publicar"
          />
        </Center>
      </form>
    </Box>
  );
}
