import React from 'react';
import { Spinner, Center } from "@chakra-ui/react";

export function Loading({ minH, size, m }) {
  return (
    <Center minH={minH}>
      <Spinner size={size} m={m} />
    </Center>
  )
}
