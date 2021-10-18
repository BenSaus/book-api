import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

import Book from './Book';
import Character from './Character';

interface BookCharacterAttributes {
    id: number;
    book_id: number;
    character_id: number;

    created_at?: Date;
    updated_at?: Date;
}

export interface BookCharacterInput
    extends Optional<BookCharacterAttributes, 'id'> {}
export interface BookCharacterOutput extends Required<BookCharacterInput> {}

class BookCharacter
    extends Model<BookCharacterAttributes, BookCharacterInput>
    implements BookCharacterAttributes
{
    public id!: number;
    public book_id!: number;
    public character_id!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

BookCharacter.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Book,
                key: 'id',
            },
        },
        character_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Character,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        underscored: true,
    }
);

Book.belongsToMany(Character, {
    through: BookCharacter,
    foreignKey: 'book_id',
});

Character.belongsToMany(Book, {
    through: BookCharacter,
    foreignKey: 'character_id',
});

export default BookCharacter;
