import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export function FormArea({ children }) {
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
                    {children}
                </Box>
            </Box>
        </Flex>
    );
}