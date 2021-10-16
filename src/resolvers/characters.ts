import { CharacterType, NoteType, BookType } from '../types';
import noteData from '../data/noteData.json';
import bookData from '../data/bookData.json';
import characterData from '../data/characterData.json';

const notes: NoteType[] = noteData;
const books: BookType[] = bookData;
const characters: CharacterType[] = characterData;

const resolvers = {
    Query: {
        getCharacters: () => characters,
        getCharacter: (_: any, input: any) => {
            const { id }: { id: string } = input;
            const book = books.find((book) => book.id === id);

            return book;
        },
    },

    Character: {
        books(parent: CharacterType) {
            const found = books.filter((book) =>
                parent.books.includes(book.id)
            );

            return found;
        },
    },
};

export default resolvers;
