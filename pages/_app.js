import '../src/perucheck.scss'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'graphql/helpers/apollo'

function MyApp ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
