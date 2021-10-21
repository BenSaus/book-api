import Book from './models/Book';
import Character from './models/Character';
import BookCharacter from './models/BookCharacter';
import seed from './seed';
import { User } from './models';

console.log('Database initialized...');

const isDev = process.env.NODE_ENV === 'development';
const seedDb = Boolean(process.env.SEED_DB);

const dbInit = async () => {
    await Book.sync({ alter: isDev });
    await Character.sync({ alter: isDev });
    await BookCharacter.sync({ alter: isDev });
    await User.sync({ alter: true });

    if (seedDb) await seed();
};

export default dbInit;
