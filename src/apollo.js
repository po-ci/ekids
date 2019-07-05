import {ApolloClient} from 'apollo-client'
import {createUploadLink} from 'apollo-upload-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloLink, concat} from 'apollo-link'
import store from './store'
import {restartWebsockets} from 'vue-cli-plugin-apollo/graphql-client'

const uploadLink = createUploadLink({
    // You should use an absolute URL here
    uri: process.env.VUE_APP_APIHOST + '/graphqlupload/',
})


const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: 'JWT ' + store.getters.getToken
        }
    });
    return forward(operation);
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: concat(authMiddleware, uploadLink),
    cache,
})
