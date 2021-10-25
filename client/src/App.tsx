import React from 'react';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink,
    from
} from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';
import People from './components/People';

const errorLink = onError(({ graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`Grapgql error ${message}`);
        });
    }
})
const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:3002/graphql' })
]);
const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <div className='app'>
                <People />
            </div>
        </ApolloProvider>
    )
}

export default App

