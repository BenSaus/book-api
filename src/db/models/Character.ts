import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface CharacterAttributes {
    id: number;
    name: string;
    description: string;
    // book_id?: number;

    created_at?: Date;
    updated_at?: Date;
}

// Setup interfaces for CRUD operations
export interface CharacterInput
    extends Optional<CharacterAttributes, 'id' | 'description'> {}
export interface CharacterUpdate
    extends Partial<
        Omit<CharacterAttributes, 'id' | 'created_at' | 'updated_at'>
    > {}
export interface CharacterOutput extends Required<CharacterAttributes> {}

// Extend the sequelize model
class Character
    extends Model<CharacterAttributes, CharacterInput>
    implements CharacterAttributes
{
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

// Initialize the model
Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
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

export default Character;
