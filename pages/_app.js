import '../styles/globals.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({ // Se configura ApolloClient con la API a leer
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>

  )
}

export default MyApp
