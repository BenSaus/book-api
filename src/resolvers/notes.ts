import { NoteType, BookType } from '../types';
import noteData from '../data/noteData.json';
import bookData from '../data/bookData.json';

const notes: NoteType[] = noteData;
const books: BookType[] = bookData;

const resolvers = {
    Query: {
        getNotes: () => notes,
        getNote: (_: any, input: any) => {
            const { id }: { id: string } = input;
            const book = notes.find((note) => note.id === id);

            return book;
        },
    },
    Mutation: {
        addNote: (_: any, input: any) => {
            const bookId: string = input.bookId;
            const text: string = input.text;

            console.log(bookId);
            console.log(text);

            const note: NoteType = {
                id: '123',
                bookId,
                text,
            };
            notes.push(note);

            return note;
        },
    },
    Note: {
        book(parent: NoteType) {
            console.log(`Resolve ${JSON.stringify(parent)}`);

            return books.find((book) => parent.bookId === book.id);
        },
    },
};

export default resolvers;
