import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { SectionHeader } from "components/commons/SectionHeader";
import { PublicationRegisterForm } from "./PublicationRegisterForm";
import { sections } from "config/sections";

export function PublicationRegister() {
    const { registerPublication } = sections;

    return (
        <Flex minHeight="100vh" width="full" align="center" my={8} justifyContent="center">
            <Box
                borderWidth={1}
                px={4}
                width="full"
                maxWidth="900px"
                borderRadius={4}
                textAlign="center"
                boxShadow="lg"
            >
                <Box p={4}>
                    <SectionHeader
                        section={registerPublication.section}
                        sectionTitle={registerPublication.title}
                    />
                    <PublicationRegisterForm />
                </Box>
            </Box>
        </Flex>
    )
}
