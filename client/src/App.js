import "./App.css";
import Body from "./pages/Body";
import APIComponent from "./pages/APIComponent";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

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

  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
       <div className="App">
      <Navbar/> 
      <APIComponent/>
      </div>
      </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
