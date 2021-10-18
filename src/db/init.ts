import Book from './models/Book';
import Character from './models/Character';
import BookCharacter from './models/BookCharacter';

import seed from './seed';

console.log('Datbase initialized...');

const isDev = process.env.NODE_ENV === 'development';

const dbInit = async () => {
    await Book.sync({ alter: isDev });
    await Character.sync({ alter: isDev });
    await BookCharacter.sync({ alter: isDev });

    console.log(
        '\n === BookCharacter db Init === \n',
        BookCharacter,
        '\n===\n'
    );

    await seed();
};

export default dbInit;
