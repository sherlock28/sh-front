import React from 'react';
import { createRoot } from 'react-dom/client';
import { client } from 'client/client';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import { App } from './App';
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ApolloProvider>
    </PersistGate>
  </Provider>
);
