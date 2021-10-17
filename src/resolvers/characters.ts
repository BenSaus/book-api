import { CharacterType, NoteType, BookType } from '../types';
import { Dal } from '../db/dal';

const resolvers = {
    Query: {
        getCharacters: async (_: any, __: any, context: any) => {
            const { dal }: { dal: Dal } = context;

            return dal.Character.getAll();
        },
        getCharacter: async (_: any, input: any, context: any) => {
            const { id }: { id: string } = input;
            const { dal }: { dal: Dal } = context;
            // const book = books.find((book) => book.id === id);
            const book = await dal.Character.get(id);

            return book;
        },
    },

    // Character: {
    //     books(parent: CharacterType) {
    //         const found = books.filter((book) =>
    //             parent.books.includes(book.id)
    //         );

    //         return found;
    //     },
    // },
};

export default resolvers;
