import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
   uri: process.env.CLIENT_API_ENDPOINT
});

const authLink = setContext((_, { headers }) => {
   const token = localStorage.getItem('token')
   return {
      headers: {
         ...headers,
         authorization: token || "",
      }
   }
})

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache()
});

export default client