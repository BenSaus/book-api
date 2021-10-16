import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(() => {
    console.log(`Server ready at port: ${PORT}`);
});
