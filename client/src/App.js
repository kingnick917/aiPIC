
import './App.css';
import Body from'./components/pages/body';
import Inportexts from './components/pages/inportexts'
import APIComponent from './components/pages/APIComponent';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Body/> <APIComponent/>
      <Inportexts/>
      </ApolloProvider>
    </div>
  );
}

export default App;
