<<<<<<< HEAD
import { version } from 'react';
import './App.css';
import Body from './pages/Body';
import APIComponent from './pages/APIComponent';
=======
import "./App.css";
import Body from "./pages/Body";
import Importexts from "./pages/importexts";
import APIComponent from "./pages/APIComponent";
>>>>>>> 85e45f63876dbc087a36c3a3f2319df9cffacdb0
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import image from './pages/APIComponent';
import Navbar from "./components/navbar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log(version)
  return (
      <ApolloProvider client={client}>
      <Navbar/> 
      <Body/>
      <APIComponent/>
      </ApolloProvider>
  );
}

export default App;
