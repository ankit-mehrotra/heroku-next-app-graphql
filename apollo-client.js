import { ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    uri: 'https://api-us-east-1.graphcms.com/v2/ckypy4vqs0nx101w8beko1xl9/master',
    cache: new InMemoryCache()
})

export default client;