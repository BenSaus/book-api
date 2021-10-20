import { Optional } from 'sequelize/types';
import { BookInput, BookOutput, BookUpdate } from '../db/models/Book';
import { Context, InputId } from './types';

// https://flaviocopes.com/typescript-object-destructuring/

const resolvers = {
    Query: {
        Books: async (_: any, __: any, { dal }: Context) => {
            return await dal.Book.getAll();
        },
        BookById: async (_: any, { id }: InputId, { dal }: Context) => {
            const book = await dal.Book.get(id);

            if (!book) {
                throw new Error('Could not find book with id ${id}');
            }

            return book;
        },
    },
    Mutation: {
        CreateBook: async (_: any, input: BookInput, { dal }: Context) => {
            const book = await dal.Book.create(input);
            return book;
        },

        UpdateBook: async (
            _: any,
            { id, input }: { id: number; input: BookUpdate },
            { dal }: Context
        ) => {
            const book = await dal.Book.update(id, input);
            if (!book) {
                throw new Error('Could not find book with id ${id}');
            }

            return book;
        },

        DeleteBook: async (_: any, { id }: InputId, { dal }: Context) => {
            await dal.BookCharacter.destroyAllWithBookId(id);
            const deleted = await dal.Book.destroy(id);

            return deleted;
        },
    },
    Book: {
        characters: async (parent: BookOutput, _: any, { dal }: Context) => {
            const characters = await dal.BookCharacter.getAllCharactersFromBook(
                parent.id
            );

            return characters;
        },
    },
};

export default resolvers;
