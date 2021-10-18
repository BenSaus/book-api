import Book, { BookInput, BookOutput } from '../models/Book';
import { CharacterInput, CharacterOutput } from '../models/Character';
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

export default { getAllCharactersFromBook, getAllBooksFromCharacter };
