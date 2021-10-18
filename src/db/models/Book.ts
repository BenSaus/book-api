import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface BookAttributes {
    id: number;
    title: string;
    author: string;

    created_at?: Date;
    updated_at?: Date;
}

// Setup interfaces for CRUD operations
export interface BookInput extends Optional<BookAttributes, 'id'> {}
export interface BookOutput extends Required<BookAttributes> {}

// Extend the sequelize model
class Book extends Model<BookAttributes, BookInput> implements BookAttributes {
    public id!: number;
    public title!: string;
    public author!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

// Initialize the model
Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
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

export default Book;
