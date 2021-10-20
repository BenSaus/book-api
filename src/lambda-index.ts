import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './schema';
import resolvers from './resolvers';
import dbInit from './db/init';
import dal from './db/dal';

dotenv.config();

dbInit();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        dal,
    }),
});

export const graphqlHandler = server.createHandler();
