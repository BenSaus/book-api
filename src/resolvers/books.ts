import { BookType, NoteType, CharacterType } from '../types';
import { Dal } from '../db/dal';

// https://flaviocopes.com/typescript-object-destructuring/

const resolvers = {
    Query: {
        getBooks: async (_: any, __: any, context: any) => {
            const { dal }: { dal: Dal } = context;

            return await dal.Book.getAll();
        },
        getBook: async (_: any, input: any, context: any) => {
            const { id }: { id: string } = input;
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
    // Book: {
    // notes(parent: BookType) {
    //     const foundNotes = notes.filter(
    //         (note) => parent.id === note.bookId
    //     );
    //     return foundNotes;
    // },
    // characters(parent: BookType) {
    //     const found =
    //     return found;
    // },
    // },
};

export default resolvers;
