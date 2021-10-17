import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import dbInit from './db/init';

dbInit();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(() => {
    console.log(`Server ready at port: ${PORT}`);
});
