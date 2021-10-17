import Book from './book';
import Character from './character';

export interface Dal {
    Book: typeof Book;
    Character: typeof Character;
}

export default { Book, Character };
