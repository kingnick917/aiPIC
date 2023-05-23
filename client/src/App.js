import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={<SearchBooks />}
              />
              <Route
                path='/saved'
                element={<SavedBooks />}
              />
              <Route
                path='*'
                element={<h1 className='display-2'>Wrong page!</h1>}
              />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
