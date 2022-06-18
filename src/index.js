import React from 'react';
import { createRoot } from 'react-dom/client';
import { client } from 'client/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import { App } from './App';
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>
);
