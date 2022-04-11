import React from 'react';
import { Container } from '@chakra-ui/react';
import { Footer } from './commons/Footer';
import { Navbar } from './commons/Navbar';

export function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container maxW='container.xl' my={5}>
                {children}
            </Container>
            <Footer />
        </>
    )
}
