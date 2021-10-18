import * as models from './models';
import { BookCharacter } from './models';
import bookData from './seedData/bookData.json';
import characterData from './seedData/characterData.json';
import bookCharacterData from './seedData/bookCharacterData.json';

const books: any = bookData;
const characters: any = characterData;
const bookCharacters: any = bookCharacterData;

console.log('\n === seed models === \n', models, '\n===\n');

async function seed() {
    try {
        for (const book of books) {
            await models.Book.upsert(book);
        }

        for (const character of characters) {
            await models.Character.upsert(character);
        }

        for (const bookCharacter of bookCharacters) {
            await BookCharacter.upsert(bookCharacter);
        }
    } catch (error) {
        console.log('\n === ERROR === \n');
        console.error(error);
    }
}

export default seed;
