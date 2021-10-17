import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface CharacterAttributes {
    id: number;
    name: string;
    description: string;

    createdAt?: Date;
    updatedAt?: Date;
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

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the model
Character.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        sequelize: sequelizeConnection,
    }
);

export default Character;
