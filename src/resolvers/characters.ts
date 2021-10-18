import { CharacterOutput } from '../db/models/Character';
import { Dal } from '../db/dal';

const resolvers = {
    Query: {
        getCharacters: async (_: any, __: any, context: any) => {
            const { dal }: { dal: Dal } = context;

            return dal.Character.getAll();
        },
        getCharacter: async (_: any, input: any, context: any) => {
            const { id }: { id: number } = input;
            const { dal }: { dal: Dal } = context;
            // const book = books.find((book) => book.id === id);
            const book = await dal.Character.get(id);

            return book;
        },
    },

    Character: {
        books: async (parent: CharacterOutput, _: any, context: any) => {
            const { dal }: { dal: Dal } = context;
            const books = await dal.BookCharacter.getAllBooksFromCharacter(
                parent.id
            );

            return books;
        },
    },
};

export default resolvers;
