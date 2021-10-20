import { Dal } from '../db/dal';

export interface Context {
    dal: Dal;
}

export interface InputId {
    id: number;
}

export interface Ids {
    bookId: number;
    characterId: number;
}
