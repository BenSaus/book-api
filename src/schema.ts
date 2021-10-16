import { gql } from 'apollo-server';

const schema = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        notes: [Note!]!
        characters: [Character!]!
    }

    type Note {
        id: ID!
        book: Book!
        text: String!
    }

    type Character {
        books: [Book!]!
        name: String!
        description: String!
    }

    type Query {
        getBooks: [Book!]!
        getBook(id: ID!): Book

        getCharacters: [Character!]!
        getCharacter(id: ID!): Character

        getNotes: [Note!]!
        getNote(id: ID!): Note
    }

    type Mutation {
        #    addBook(title: String, author: String): Book
        addNote(bookId: ID!, text: String): Note
    }
`;

export default schema;
