import Book from './models/Book';

console.log('Datbase initialized...');

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
    Book.sync({ force: true });
};

export default dbInit;
