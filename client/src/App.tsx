import React from 'react';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3002',
    cache: new InMemoryCache
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

export default App

