import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Logo } from 'components/commons/Logo';
import { SocialButton } from './SocialButton';
import React from 'react';

export function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo boxSize="80px"/>
                <Stack direction={'row'} spacing={6}>
                    <Link _focus={{ outline: "none", border: "none " }} href={'#'}>Inicio</Link>
                    <Link _focus={{ outline: "none", border: "none " }} href={'#'}>Buscar mi hogar</Link>
                    <Link _focus={{ outline: "none", border: "none " }} href={'#'}>Publicar mi inmueble</Link>
                    <Link _focus={{ outline: "none", border: "none " }} href={'#'}>Sobre nosotros</Link>
                    <Link _focus={{ outline: "none", border: "none " }} href={'#'}>Contactos</Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Segundo Hogar. Todos los derechos reservados.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}