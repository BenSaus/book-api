import Book, { BookInput, BookOutput } from '../models/Book';

const create = async (payload: BookInput): Promise<BookOutput> => {
    return Book.create(payload);
};

const getAll = async (): Promise<BookOutput[]> => {
    return Book.findAll();
};

const get = async (id: string): Promise<BookOutput> => {
    const book = await Book.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }
    return book;
};

const update = async (
    id: string,
    payload: Partial<BookInput>
): Promise<BookOutput> => {
    const book = await Book.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }

    return book.update(payload, { where: { id } });
};

const destroy = async (id: string): Promise<boolean> => {
    const num_destroyed = await Book.destroy({ where: { id } });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

export default { create, getAll, get, update, destroy };
