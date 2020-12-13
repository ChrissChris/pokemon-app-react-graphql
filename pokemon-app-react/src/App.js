import "./App.css";
import ApolloClient from "apollo-boost";

function App() {
  const client = new ApolloClient({
    url: "https://graphql-pokemon.now.sh",
  });
  return <div className="App"></div>;
}

export default App;
