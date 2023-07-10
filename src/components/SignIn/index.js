import React, { useCallback, useState } from 'react';
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
import { useRegisterUser } from "hooks/pages/SignUp/useRegisterUser"
import {
  validateEmailSignIn,
  validatePasswordSignIn,
} from "utils/validations/SignIn";
import { SectionHeader } from "components/commons/SectionHeader";
import { sections } from "config/sections";

import {
  LoginSocialGoogle,
  LoginSocialFacebook,
  LoginSocialTwitter,
  IResolveParams
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from 'react-social-login-buttons';

export function SignIn() {

  const REDIRECT_URI =
    'http://localhost:3000';
  // const REDIRECT_URI = 'http://localhost:3000/account/login'
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState(null)

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => { }, []);

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

  const {
    onSubmitStudentUserFacebook
  } = useRegisterUser();


  
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
              isOnlyGetToken
              client_id={process.env.REACT_APP_GG_APP_ID || ''}
              onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider)
                setProfile(data)
                console.log(provider)
                console.log(data)
                let accessToken = data.access_token;
                fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: {
                    Authorization: `Bearer ${accessToken}`
                  }
                })
                  .then(response => response.json())
                  .then(data => {
                    // Aquí puedes trabajar con los datos obtenidos
                    console.log(data);
                  })
                  .catch(error => {
                    console.error('Error en la solicitud:', error);
                  });
                
              }}
              onReject={(err) => {
                console.log(err)
              }}
            >
              <GoogleLoginButton />
            </LoginSocialGoogle>

            <LoginSocialFacebook
              appId={process.env.REACT_APP_FB_APP_ID}
              onResolve={(response) => {
                onSubmitStudentUserFacebook(response)
              }}
              onReject={(error) => { console.log(error) }}>
              <FacebookLoginButton></FacebookLoginButton>
            </LoginSocialFacebook>
            <LoginSocialTwitter
              isOnlyGetToken
              client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY}
              redirect_uri={REDIRECT_URI}
              onLoginStart={onLoginStart}
              onResolve={({ provider, data }) => {
                setProvider(provider)
                setProfile(data)
              }}
              onReject={(err) => {
                console.log(err)
              }}
            >
              <TwitterLoginButton />
            </LoginSocialTwitter>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}