import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://repsfitnessserver.herokuapp.com/graphql",
  // uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export { client };
