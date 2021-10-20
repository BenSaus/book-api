import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import dbInit from './db/init';
import dal from './db/dal';

dotenv.config();

const PORT = process.env.PORT || 9595;

dbInit();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        dal,
    }),
});

server.listen(PORT).then(() => {
    console.log(`Server ready at port: ${PORT}`);
});
