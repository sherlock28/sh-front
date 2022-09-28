import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from "@apollo/client";

const httpLink = new createHttpLink({ uri: process.env.REACT_APP_API_GRAPHQL });

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            "x-hasura-admin-secret": process.env.REACT_APP_GRAPHQL_KEY
        }
    });
    return forward(operation);
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});