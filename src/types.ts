type BookType = {
    id: number;
    title: string;
    author: string;
};

type CharacterType = {
    id: number;
    name: string;
    books: string[];
    book_id: number;
};

export { BookType, CharacterType };
