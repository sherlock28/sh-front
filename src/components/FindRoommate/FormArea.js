import React from "react";
import { Box, Flex } from "@chakra-ui/react";

export function FormArea({ children }) {
    return (
        <Flex minHeight="30vh" width="full" align="start" my={2} justifyContent="center">
            <Box
                borderWidth={1}
                px={2}
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