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
        Books: [Book!]!
        BookById(id: ID!): Book

        Characters: [Character!]!
        CharacterById(id: ID!): Character
    }

    type Mutation {
        CreateBook(title: String, author: String): Book
        UpdateBook(id: ID!, input: UpdateBookInput): Book
        DeleteBook(id: ID!): Boolean

        CreateCharacter(input: CreateCharacterInput): Character
        UpdateCharacter(id: ID!, input: UpdateCharacterInput): Character
        DeleteCharacter(id: ID!): Boolean

        AddCharacterToBook(input: AddCharacterToBookInput): Character
        RemoveCharacterFromBook(input: RemoveCharacterFromBookInput): Character
    }

    input CreateBookInput {
        title: String
        author: String
    }

    input UpdateBookInput {
        title: String
        author: String
    }

    input UpdateCharacterInput {
        name: String
        description: String
        books: [ID!]
    }

    input CreateCharacterInput {
        name: String
        description: String
        books: [ID!]
    }

    input AddCharacterToBookInput {
        characterId: ID!
        bookId: ID!
    }

    input RemoveCharacterFromBookInput {
        characterId: ID!
        bookId: ID!
    }
`;

export default schema;
