type NoteType = {
    id: string;
    bookId: string;
    text: string;
};

type BookType = {
    id: string;
    title: string;
    author: string;
};

type CharacterType = {
    id: string;
    name: string;
    books: string[];
};

export { NoteType, BookType, CharacterType };
