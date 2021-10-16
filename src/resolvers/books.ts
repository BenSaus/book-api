import { BookType, NoteType, CharacterType } from '../types';
import noteData from '../data/noteData.json';
import bookData from '../data/bookData.json';
import characterData from '../data/characterData.json';

const notes: NoteType[] = noteData;
const books: BookType[] = bookData;
const characters: CharacterType[] = characterData;

const resolvers = {
    Query: {
        getBooks: () => books,
        getBook: (_: any, input: any) => {
            const { id }: { id: string } = input;
            const book = books.find((book) => book.id === id);

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
        notes(parent: BookType) {
            const foundNotes = notes.filter(
                (note) => parent.id === note.bookId
            );

            return foundNotes;
        },
        characters(parent: BookType) {
            const found = characters.filter((character) =>
                character.books.includes(parent.id)
            );

            return found;
        },
    },
};

export default resolvers;
