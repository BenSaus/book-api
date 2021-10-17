import { CharacterInput, CharacterOutput } from '../models/Character';
import { Character } from '../models';

const create = async (payload: CharacterInput): Promise<CharacterOutput> => {
    return Character.create(payload);
};

const getAll = async (): Promise<CharacterOutput[]> => {
    return Character.findAll();
};

const get = async (id: string): Promise<CharacterOutput> => {
    const book = await Character.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }
    return book;
};

const update = async (
    id: string,
    payload: Partial<CharacterInput>
): Promise<CharacterOutput> => {
    const book = await Character.findByPk(id);
    if (!book) {
        throw new Error('Not found');
    }

    return book.update(payload, { where: { id } });
};

const destroy = async (id: string): Promise<boolean> => {
    const num_destroyed = await Character.destroy({ where: { id } });
    if (num_destroyed === 1) {
        return true;
    } else {
        return false;
    }
};

export default { create, getAll, get, update, destroy };
