import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { sections } from "config/sections";
import { AccountTabs } from "./AccountTabs";

export function ProfileArea() {
  // eslint-disable-next-line
  const { profile } = sections;

  return (
    <Flex minHeight="440px" width="full" justifyContent="center" mb={8}>
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="80%"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <AccountTabs />
        </Box>
      </Box>
    </Flex>
  );
}
