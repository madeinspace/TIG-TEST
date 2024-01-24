import { ApolloClient, InMemoryCache } from '@apollo/client';

const APPOLO_CLIENT = new ApolloClient({
    uri: 'https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-token': 'fe-test-2023',
    },
  });

export default APPOLO_CLIENT;