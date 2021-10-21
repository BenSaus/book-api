import Book from './book';
import Character from './character';
import BookCharacter from './bookCharacter';
import User from './user';

export interface Dal {
    Book: typeof Book;
    Character: typeof Character;
    BookCharacter: typeof BookCharacter;
    User: typeof User;
}

export default { Book, Character, BookCharacter, User };
