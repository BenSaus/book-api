import {
    CharacterOutput,
    CharacterInput,
    CharacterUpdate,
} from '../db/models/Character';
import { BookCharacterInput } from '../db/models/BookCharacter';
import { Context, InputId, Ids } from './types';

interface CreateCharcterInput extends CharacterInput {
    books?: number[];
}

const resolvers = {
    Query: {
        Characters: async (_: any, __: any, { dal }: Context) => {
            return dal.Character.getAll();
        },
        CharacterById: async (_: any, { id }: InputId, { dal }: Context) => {
            const character = await dal.Character.get(id);

            if (!character) {
                throw new Error('Could not find character with id ${id}');
            }

            return character;
        },
    },
    Mutation: {
        CreateCharacter: async (_: any, args: any, { dal }: Context) => {
            const { input }: { input: CreateCharcterInput } = args;

            const character = await dal.Character.create(input);

            if (input.books !== undefined) {
                let bookCharacters: BookCharacterInput[] = [];
                for (const book_id of input.books) {
                    bookCharacters.push({
                        book_id,
                        character_id: character.id,
                    });
                }
                await dal.BookCharacter.bulkCreate(bookCharacters);
            }
            return character;
        },
        UpdateCharacter: async (
            _: any,
            { id, input }: { id: number; input: CharacterUpdate },
            { dal }: Context
        ) => {
            const book = await dal.Character.update(id, input);
            if (!book) {
                throw new Error('Could not find character with id ${id}');
            }

            return book;
        },
        DeleteCharacter: async (_: any, { id }: InputId, { dal }: Context) => {
            // TODO: Make this a transaction
            await dal.BookCharacter.destroyAllWithCharacterId(id);
            const deleted = await dal.Character.destroy(id);

            return deleted;
        },
        AddCharacterToBook: async (_: any, args: any, { dal }: Context) => {
            const { bookId, characterId }: Ids = args.input;
            const book = dal.Book.get(bookId);
            const character = dal.Character.get(characterId);

            if (!book) {
                throw new Error('Could not find book with id ${id}');
            }
            if (!character) {
                throw new Error('Could not find character with id ${id}');
            }

            await dal.BookCharacter.create({
                book_id: bookId,
                character_id: characterId,
            });

            return character;
        },
        RemoveCharacterFromBook: async (
            _: any,
            args: any,
            { dal }: Context
        ) => {
            const { bookId, characterId }: Ids = args.input; // TODO: Fix this
            const book = dal.Book.get(bookId);
            const character = dal.Character.get(characterId);

            if (!book) {
                throw new Error('Could not find book with id ${id}');
            }
            if (!character) {
                throw new Error('Could not find character with id ${id}');
            }

            await dal.BookCharacter.destroy(bookId, characterId);
            return character;
        },
    },
    Character: {
        books: async (parent: CharacterOutput, _: any, { dal }: Context) => {
            const books = await dal.BookCharacter.getAllBooksFromCharacter(
                parent.id
            );

            return books;
        },
    },
};

export default resolvers;
