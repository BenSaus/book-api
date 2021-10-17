import { BookOutput } from '../db/models/Book';
import { Dal } from '../db/dal';

// https://flaviocopes.com/typescript-object-destructuring/

const resolvers = {
    Query: {
        getBooks: async (_: any, __: any, context: any) => {
            const { dal }: { dal: Dal } = context;

            return await dal.Book.getAll();
        },
        getBook: async (_: any, input: any, context: any) => {
            const { id }: { id: number } = input;
            const { dal }: { dal: Dal } = context;

            const book = await dal.Book.get(id);
            return book;
        },
    },
    // Mutation: {
    // addBook: (_: any, input: any) => {
    //     const { title, author }: { title: string; author: string } = input;
    //     console.log(author);
    //     console.log(title);
    //     return books[0];
    // },
    // },
    Book: {
        characters: async (parent: BookOutput, _: any, context: any) => {
            const { dal }: { dal: Dal } = context;
            const characters = await dal.Character.getAllFromBook(parent.id);

            return characters;
        },
    },
};

export default resolvers;
