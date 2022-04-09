import React from 'react';
import { Container } from '@chakra-ui/react';

export function Layout({ children }) {
    return (
        <Container maxW='container.xl' bg='gray' color='#262626'>
            {children}
        </Container>
    )
}
