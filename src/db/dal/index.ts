import Book from './book';
import Character from './character';
import BookCharacter from './bookCharacter';

export interface Dal {
    Book: typeof Book;
    Character: typeof Character;
    BookCharacter: typeof BookCharacter;
}

export default { Book, Character, BookCharacter };
