import Book, { BookOutput } from '../models/Book';
import {
    BookCharacterInput,
    BookCharacterOutput,
} from '../models/BookCharacter';
import { CharacterOutput } from '../models/Character';
import { BookCharacter, Character } from '../models';

const getAllCharactersFromBook = async (
    book_id: number
): Promise<CharacterOutput[]> => {
    const book: any = await Book.findOne({
        where: { id: book_id },
        include: [Character],
    });

    return book.Characters;
};

const getAllBooksFromCharacter = async (
    character_id: number
): Promise<BookOutput[]> => {
    const character: any = await Character.findOne({
        where: { id: character_id },
        include: [Book],
    });

    return character.Books;
};

const create = async (
    payload: BookCharacterInput
): Promise<BookCharacterOutput> => {
    return BookCharacter.create(payload);
};

const bulkCreate = async (
    payload: BookCharacterInput[]
): Promise<BookCharacterOutput[]> => {
    return BookCharacter.bulkCreate(payload);
};

const getAll = async (): Promise<BookCharacterOutput[]> => {
    return BookCharacter.findAll();
};

const get = async (id: number): Promise<BookCharacterOutput> => {
    const book = await BookCharacter.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }
    return book;
};

const update = async (
    id: number,
    payload: Partial<BookCharacterInput>
): Promise<BookCharacterOutput> => {
    const book = await BookCharacter.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }

    return book.update(payload, { where: { id } });
};

const destroy = async (
    book_id: number,
    character_id: number
): Promise<boolean> => {
    const num_destroyed = await BookCharacter.destroy({
        where: { book_id, character_id },
    });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

const destroyAllWithCharacterId = async (
    character_id: number
): Promise<boolean> => {
    const num_destroyed = await BookCharacter.destroy({
        where: { character_id },
    });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

const destroyAllWithBookId = async (book_id: number): Promise<boolean> => {
    const num_destroyed = await BookCharacter.destroy({
        where: { book_id },
    });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

export default {
    create,
    bulkCreate,
    get,
    getAll,
    getAllCharactersFromBook,
    getAllBooksFromCharacter,
    update,
    destroy,
    destroyAllWithCharacterId,
    destroyAllWithBookId,
};
