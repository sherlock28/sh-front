import React from 'react';
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react';
import { Link } from "wouter";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Logo } from 'components/commons/Logo';
import { SocialButton } from './SocialButton';
import { paths } from "config/paths";

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
                    <Link href={paths.landing}>Inicio</Link>
                    <Link href={paths.search}>Buscar mi hogar</Link>
                    <Link href={paths.houseRegister}>Publicar mi inmueble</Link>
                    <Link href={paths.members}>Sobre nosotros</Link>
                    <Link href={paths.contacts}>Contactos</Link>
                    <Link href={paths.faq}>FAQ</Link>
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
                    <Text>© {(new Date()).getFullYear()} Segundo Hogar. Todos los derechos reservados.</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'https://twitter.com'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'https://youtube.com'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'https://instagram.com'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}