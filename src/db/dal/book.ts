import Book, { BookInput, BookOutput } from '../models/Book';

export const getBooks = async (): Promise<BookOutput[]> => {
    return Book.findAll();
};
