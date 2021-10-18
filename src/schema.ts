import { gql } from 'apollo-server';

const schema = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        characters: [Character!]!
    }

    type Character {
        id: ID!
        name: String!
        description: String!
        books: [Book!]!
    }

    type Query {
        getBooks: [Book!]!
        getBook(id: ID!): Book

        getCharacters: [Character!]!
        getCharacter(id: ID!): Character
    }

    #type Mutation {
    #    addBook(title: String, author: String): Book
    #    addNote(bookId: ID!, text: String): Note
    #}
`;

export default schema;
