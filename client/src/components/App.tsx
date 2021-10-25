import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink,
    from
} from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';
import People from './People';
import { Container } from './Container.style';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from '../pages/Home';
import PersonDetailsPage from '../pages/PersonDetails';

const errorLink = onError(({ graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`Graphql error ${message}`);
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
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/person-details/:name" component={PersonDetailsPage} />
                </Switch>
            </Router>
        </ApolloProvider>
    )
}

export default App

