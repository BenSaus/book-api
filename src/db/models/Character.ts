import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import Book from './Book';

interface CharacterAttributes {
    id: number;
    name: string;
    description: string;
    book_id?: number;

    created_at?: Date;
    updated_at?: Date;
}

// Setup interfaces for CRUD operations
export interface CharacterInput
    extends Optional<CharacterAttributes, 'id' | 'description'> {}
export interface CharacterOutput extends Required<CharacterAttributes> {}

// Extend the sequelize model
class Character
    extends Model<CharacterAttributes, CharacterInput>
    implements CharacterAttributes
{
    public id!: number;
    public name!: string;
    public description!: string;
    public book_id!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

// Initialize the model
Character.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
        underscored: true,
    }
);

Character.belongsTo(Book, {
    foreignKey: { name: 'book_id', allowNull: false },
});

export default Character;
