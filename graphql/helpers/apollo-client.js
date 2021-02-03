import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import WithApollo from 'next-with-apollo'

export function createApolloClient () {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.ENDPOINT,
      headers: {
        token_id: process.env.TOKEN_GRAPHQL,
        'Access-Control-Allow-Origin': '*'
      }
    }),
    cache: new InMemoryCache()
  })
  return client
}

export default WithApollo(
  ({ initialState }) => {
    return new ApolloClient({
      ssrMode: typeof window === 'undefined',
      link: new HttpLink({
        uri: process.env.ENDPOINT,
        headers: {
          token_id: process.env.TOKEN_GRAPHQL,
          'Access-Control-Allow-Origin': '*'
        }
      }),
      cache: new InMemoryCache().restore(initialState || {})
    })
  },
  {
    // eslint-disable-next-line react/display-name
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} can="can"/>
        </ApolloProvider>
      )
    }
  }
)
