import { CharacterInput, CharacterOutput } from '../models/Character';
import { Character, Book } from '../models';
import { BookOutput } from '../models/Book';

const create = async (payload: CharacterInput): Promise<CharacterOutput> => {
    return Character.create(payload);
};

const getAll = async (): Promise<CharacterOutput[]> => {
    return Character.findAll();
};

const get = async (id: number): Promise<CharacterOutput> => {
    const book = await Character.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }
    return book;
};

const update = async (
    id: number,
    payload: Partial<CharacterInput>
): Promise<CharacterOutput> => {
    const book = await Character.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }

    return book.update(payload, { where: { id } });
};

const destroy = async (id: number): Promise<boolean> => {
    const num_destroyed = await Character.destroy({ where: { id } });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

const getAllFromBook = async (book_id: number): Promise<CharacterOutput[]> => {
    const books = await Character.findAll({ where: { book_id } });

    return books;
};

export default { create, getAll, getAllFromBook, get, update, destroy };
