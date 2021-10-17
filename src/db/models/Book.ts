import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface BookAttributes {
    id: number;
    title: string;
    author: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// TODO: Learn what these do and how they are defined
export interface BookInput extends Optional<BookAttributes, 'id'> {}
export interface BookOutput extends Required<BookAttributes> {}

// Extend the sequelize model
class Book extends Model<BookAttributes, BookInput> implements BookAttributes {
    public id!: number;
    public title!: string;
    public author!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
Book.init(
    {
        id: {
            type: DataTypes.INTEGER, // TODO: Use uuid's instead
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
    }
);

export default Book;
