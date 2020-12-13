import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

function App() {
  const client = new ApolloClient({
    url: "https://graphql-pokemon.now.sh",
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
