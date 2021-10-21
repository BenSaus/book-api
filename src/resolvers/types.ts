import { Dal } from '../db/dal';

export interface Context {
    dal: Dal;
    jwtSecret: string;
}

export interface InputId {
    id: number;
}

export interface BookAndCharacterIds {
    bookId: number;
    characterId: number;
}
