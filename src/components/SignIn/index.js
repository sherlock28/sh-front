import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  Link as LinkChakra,
  Center,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { paths } from "config/paths";
import { Link } from "wouter";
import { CustomButton } from "components/commons/CustomButton";
import { useSignInForm } from "hooks/pages/SignIn/useSignInForm";
import { useLoginWithSocialNet } from "hooks/utils/useLoginWithSocialNet";
import { validateEmailSignIn, validatePasswordSignIn } from "utils/validations/SignIn";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";
import { LoginSocialGoogle, LoginSocialFacebook, LoginSocialTwitter } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

const REDIRECT_URI = 'http://localhost:3000/buscar';

export function SignIn() {
  const { login } = sections;

  const {
    register,
    handleSubmit,
    errors,
    onSubmitLoggin,
    showPass,
    handleShowPass,
    isFetching,
  } = useSignInForm();

  const { onSubmitStudentUserFacebook, onSubmitStudentUserGoogle, GOOGLE_AUTH_SCOPE, setProvider, setProfile } = useLoginWithSocialNet();

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Stack align={'center'}>
          <SectionHeader section={login.section} sectionTitle={login.title} />
        </Stack>

        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>

          <Stack spacing={4}>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Ingresá tu email</FormLabel>
              <Input id="email" type="email" placeholder="Email" {...register("email", validateEmailSignIn)} />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <FormLabel>Ingresá tu contraseña</FormLabel>
              <InputGroup>
                <Input id="password" type={showPass ? "text" : "password"} placeholder="Contraseña" {...register("password", validatePasswordSignIn)} />
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

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link to={paths.forgetterpass}>
                  <LinkChakra color={'blue.400'}>¿Olvidaste tu contraseña?</LinkChakra>
                </Link>
              </Stack>

              <Center>
                <CustomButton
                  handleClick={handleSubmit(onSubmitLoggin)}
                  type="submit"
                  isLoading={isFetching}
                  loadingText="Enviando"
                  width="75%"
                  textButton="Ingresar"
                />
              </Center>

            </Stack>
            <br></br>

            <LoginSocialGoogle
              scope={GOOGLE_AUTH_SCOPE}
              client_id={process.env.REACT_APP_GG_APP_ID || ''}
              onResolve={({ provider, data }) => {
                setProvider(provider)
                setProfile(data)
                onSubmitStudentUserGoogle({ data })
              }}
              onReject={(err) => {
                console.error(err)
              }}>
              <GoogleLoginButton />
            </LoginSocialGoogle>

            <LoginSocialFacebook
              appId={process.env.REACT_APP_FB_APP_ID}
              onResolve={(response) => {
                onSubmitStudentUserFacebook(response)
              }}
              onReject={(err) => {
                console.log(err)
              }}>
              <FacebookLoginButton />
            </LoginSocialFacebook>

            <LoginSocialTwitter
              isOnlyGetToken
              client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY}
              redirect_uri={REDIRECT_URI}
              onResolve={({ provider, data }) => {
                setProvider(provider)
                setProfile(data)
              }}
              onReject={(err) => {
                console.error(err)
              }}>
              <TwitterLoginButton />
            </LoginSocialTwitter>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}