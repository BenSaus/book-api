import Book from './models/Book';
import Character from './models/Character';

console.log('Datbase initialized...');

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
    Book.sync({ alter: isDev });
    Character.sync({ alter: isDev });
};

export default dbInit;
